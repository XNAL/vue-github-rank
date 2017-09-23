'use strict';

// Development specific configuration
// ==================================

module.exports = {
    db: {
        mongo: {
            uri:'mongodb://localhost/work'
        },
        mysql: {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'mysql',
            connectionLimit:10
        },
        redis: {
            port: 6379,
            host: '127.0.0.1',
            db: 3,
            options: {
                return_buffers: false,
                auth_pass: ''
            }
        }
    },
    appPath:"dist",
    timer: {
        timeout: 100,			//ajax 时间间隔
        asyncNum: 5,			//并发数目限制
        header: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, sdch",
            "Accept-Language": "zh-CN,zh;q=0.8",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0",
            "X-Requested-With": "XMLHttpRequest"
        },
        pageTotal: 10
    }
};
