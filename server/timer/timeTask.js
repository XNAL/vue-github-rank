const cheerio = require('cheerio');
const fs = require('fs');

const helper = require('../helper');
const config = require('../config/config');
const sqlQuery = require('../config/mysql-async');

const dataDir = __dirname + '/data/movieData-';
const dataErrDir = __dirname + '/data/movieDataErr-';
const imgPrefix = 'movieImg-';

// 根据网站api得到相应的url和参数
const reqUrl = 'https://github.com/search';
const reqParams = {
    "o": "desc",
    "p": 1,
    "q": "location:China",
    "s": "followers",
    "type": "Users",
    "utf8": "✓"
};



// 启动时直接执行代码 
(async function () {
    let userData = [];
    let pageIndex = 1;
    while (pageIndex <= config.timer.pageTotal) {
        let result = await getUserData(pageIndex, userData.length);
        if (result.success === true) {
            pageIndex++;
            userData.push(...result.data);
        }
    }

    console.log('userdata', userData.length);
    // let sqlResult = await sqlQuery('select * from user_rank')
    // console.log(sqlResult);

})();

async function getUserData(pageIndex, currentOrder) {
    reqParams.p = pageIndex;
    let result = '';
    try {
        result = await helper.fetch_data_get(reqUrl, reqParams);
    } catch (err) {
        console.log('获取链接失败：', err);
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
            avatar: _this.find('img.avatar').attr('src').replace(/\/u\//, ""),
            username: $userInfo.find('a:first-child').text(),
            nickname: $userInfo.find('span.f4.ml-1').text(),
            introduction: $userInfo.find('p.f5.mt-2').text().trim(),
            location: $userInfo.find('.user-list-meta').eq(0).text().trim(),
            order: ++currentOrder
        });
    })
    console.log('data' + pageIndex, data.length);
    return {
        success: true,
        data: data
    };
}
