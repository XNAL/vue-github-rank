const log_debug = require('../../../helper.js').log_debug;

exports.get = async (ctx) => {
  log_debug('get method');
  let results = await ctx.execSql('select * from user');
  ctx.body = results;
}

