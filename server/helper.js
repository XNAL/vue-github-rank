// const log_debug = require('debug')('dev');
// exports.log_debug = log_debug;
const superagent = require('superagent');
const config = require('./config/config');

// 公共方法：通过get请求获取数据
function fetch_data_get(url, queryParams) {
	return new Promise((reslove, reject) => {
		superagent
			.get(url)
			.set(config.timer.header)
			.query(queryParams)
			.end((err, result) => {
				err ? reject(err) : reslove(result);
			})
	})
}


exports.fetch_data_get = fetch_data_get;

