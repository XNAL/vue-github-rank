// Development specific configuration
// ==================================
var path = require('path');

module.exports = {
	db: {
        mysql: {
            host     : '127.0.0.1',
            user     : 'root',
            password : '123456',
            database : 'github_rank',
            connectionLimit:10
        }
	},
    root: path.normalize(__dirname + '/../../..'),
    appPath:"src",
	port: 9000,
    timer: {
        timeout: 100,			//ajax 时间间隔
        asyncNum: 5,			//并发数目限制
        header: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.8",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36",
        },
        pageTotal: 10
    }
};
