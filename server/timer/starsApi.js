const helper = require('../helper');
const config = require('../config/config');
const sqlQuery = require('../config/mysql-async');

// 根据网站api得到相应的url和参数
const reqUrl = 'https://api.github.com/search/repositories';
const reqParams = {
    q: '',
    sort: 'stars',
    page: 1,
    order: 'desc',
    per_page: 50
};

async function mostStars(type) {
    console.log(`开始进行${type}数据的获取：`);
    reqParams.q = type;

    let starsData = [];
    let pageIndex = 1;
    let errTotal = 0,
        isAlwaysErr = false,
        errPage = 0;
    while (pageIndex <= config.timer.pageUserTotal) {
        let result = await getStarsData(pageIndex, starsData.length);
        if (result.success === true) {
            errTotal = 0;
            if (result.data.length === 0) {
                pageIndex = config.timer.pageUserTotal + 1;
            } else {
                pageIndex++;
                starsData.push(...result.data);
            }
            // 暂停500ms
            await helper.sleep(500);
        } else {
            errTotal++;
            if(errTotal < 15) {
                // 暂停1s
                await helper.sleep(1000);
            } else if(errTotal < 30) {
                await helper.sleep(5000);
            } else {
                await helper.sleep(10000);
            }
        }

        if (errTotal >= 50) {
            isAlwaysErr = true;
            errPage = pageIndex;
            pageIndex = config.timer.pageUserTotal + 1;
        }
    }
    if (!isAlwaysErr) {
        await sqlQuery(`delete from stars_rank where type = '${type}'`);
        let sql = 'INSERT INTO stars_rank (projectname, introduction, topics, updatetime, stars, ordernum, type, crawlingtime) VALUES';
        for (let { projectname, introduction, topics, updatetime, stars, ordernum} of Object.values(starsData)) {
            projectname = projectname.replace(/'/g, "\'")
            introduction = introduction.replace(/'/g, "\'")
            sql += `('${projectname}', '${introduction}', '${topics}', '${updatetime}', '${stars}', ${ordernum}, '${type}', NOW()), `;
        }
        sql = sql.substring(0, sql.length - 2);
        // console.log('sql', sql)
        let sqlResult = await sqlQuery(sql)
        console.log(`${type}数据的获取成功：`, sqlResult);
    } else {
        console.log(`${type}请求第${errPage}页数据错误超过50次，此次操作跳过此分类的取值。`);
    }
}

async function getStarsData(pageIndex, currentOrder) {
    reqParams.p = pageIndex;
    let result = {};
    try {
        result = await helper.fetch_data_get(reqUrl, reqParams);
    } catch (err) {
        console.log(`获取${reqParams.l}的第${pageIndex}页面数据失败.`);
        return {
            success: false,
            data: null
        };
    }
    let data = [];
    (result.body.items || []).forEach(item => {
      data.push({
        projectname: item.full_name,
        introduction: item.description,
        topics: '',
        updatetime: item.updated_at,
        stars: item.stargazers_count,
        ordernum: ++currentOrder
      })
    })
    return {
        success: true,
        data: data
    };
}

exports.mostStars = mostStars;
