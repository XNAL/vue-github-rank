const cheerio = require('cheerio');
const fs = require('fs');

const helper = require('../helper');
const config = require('../config/config');
const sqlQuery = require('../config/mysql-async');

// 根据网站api得到相应的url和参数
const reqUrl = 'https://github.com/search';
const reqParams = {
    "o": "desc",
    "p": 1,
    "q": "location:China followers:>1000",
    "s": "followers",
    "type": "Users",
    "utf8": "✓"
};

async function mostFollowers(type = 'china') {
    console.log(`开始进行${type === 'all' ? '' : 'china'} 100 most followers 数据的获取：`);
    let userData = [];
    let pageIndex = 1;
    let errTotal = 0,
        isAlwaysErr = false,
        errPage = 0;
    while (pageIndex <= config.timer.pageTotal) {
        let result = await getUserData(pageIndex, userData.length, type);

        if (result.success === true) {
            errTotal = 0;
            pageIndex++;
            userData.push(...result.data);

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
            pageIndex = config.timer.pageTotal + 1;
        }
    }

    if (!isAlwaysErr) {
        let delResult = await sqlQuery('delete from user_rank');
        let sql = 'INSERT INTO user_rank (username, nickname, avatar, introduction, location, ordernum, crawlingtime) VALUES';
        for (let {
                username,
                nickname,
                avatar,
                introduction,
                location,
                ordernum
            } of Object.values(userData)) {
            sql += `('${username}', '${nickname}', '${avatar}', '${introduction}', '${location}', ${ordernum}, NOW()), `;
        }
        sql = sql.substring(0, sql.length - 2);
        let sqlResult = await sqlQuery(sql)
        console.log(`${type === 'all' ? '' : 'china'} 100 most followers 数据获取完成：`, sqlResult);
    } else {
        console.log(`${type === 'all' ? '' : 'china'} 100 most followers 请求第${errPage}页数据错误超过50次，跳过此次取值。`);
    }
}

async function getUserData(pageIndex, currentOrder, type) {
    reqParams.p = pageIndex;
    if(type === 'all') {
        reqParams.q = 'followers:>1000'
    }
    let result = '';
    try {
        result = await helper.fetch_data_get(reqUrl, reqParams);
    } catch (err) {
        console.log(`获取${type === 'all' ? '' : 'china'} 100 most followers 的第${pageIndex}页面数据失败.`);
        return {
            success: false,
            data: null
        };
    }
    // 根据页面结构获取所需数据
    let $ = cheerio.load(result.text);
    let data = [];
    $('#user_search_results .user-list-item').each((idx, el) => {
        let _this = $(el);
        let $userInfo = _this.find('.user-list-info');
        data.push({
            avatar: _this.find('img.avatar').attr('src'),
            username: $userInfo.find('a:first-child').text().replace(/\'/g, '\\\''),
            nickname: $userInfo.find('span.f4.ml-1').text().replace(/\'/g, '\\\''),
            introduction: $userInfo.find('p.f5.mt-2').text().trim().replace(/\'/g, '\\\'').replace(/\?/g, ''),
            location: $userInfo.find('.user-list-meta').eq(0).text().trim(),
            ordernum: ++currentOrder
        });
    })
    return {
        success: true,
        data: data
    };
}


exports.mostFollowers = mostFollowers;
