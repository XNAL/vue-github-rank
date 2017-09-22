'use strict';

// Development specific configuration
// ==================================
process.env.DEBUG= 'dev';

module.exports = {
    db: {
        mongo: {
            uri:'mongodb://localhost/work'
        },
        mysql: {
            host     : '127.0.0.1',
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
    appPath:"src"
};
