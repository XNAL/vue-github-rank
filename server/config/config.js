// Development specific configuration
// ==================================
module.exports = {
	db: {
		mongo: {
			uri: 'mongodb://localhost/work'
		},
		mysql: {
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'mysql',
			connectionLimit: 10
		},
		redis: {
			port: 6379,
			//host: '127.0.0.1',
			host: '172.16.45.254',
			db: 10,
			options: {
				return_buffers: false,
				//auth_pass: 'GuangtianTuringCatGood'
			}
		},
	},
	port: 8081,
	wx: {
		appid: 'wx348e94c8153454f2',
		secret: '4a79057811757bbde71c5ad8c78e6f4e'
	}
};
