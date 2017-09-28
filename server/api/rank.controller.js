// const log_debug = require('../../../helper.js').log_debug;

exports.china = async(ctx) => {
    // log_debug('get method');
    // console.log()
    let page = ctx.query.page || 1,
        pageNum = ctx.query.pagenum || 20;
    let pageIndex = (page - 1) * pageNum < 0 ? 0 : (page - 1) * pageNum,
        pageEnd = page * pageNum < 0 ? 20 : page * pageNum;
    let sql = `SELECT * FROM user_rank ORDER BY ordernum LIMIT ${pageIndex}, ${pageEnd}`;
    try {
        let results = await ctx.execSql(sql);
        ctx.body = {
            success: 1,
            message: '',
            data: results
        };
    } catch (error) {
        ctx.body = {
            success: 0,
            message: '查询数据出错',
            data: null
        };
    }
}

exports.star = async(ctx) => {
    // log_debug('get method');
    let page = ctx.query.page || 1,
        pageNum = ctx.query.pagenum || 20,
        type = ctx.query.type;
    let pageIndex = (page - 1) * pageNum < 0 ? 0 : (page - 1) * pageNum,
        pageEnd = page * pageNum < 0 ? 20 : page * pageNum;
    let sql = `SELECT * FROM stars_rank where type = '${type}' ORDER BY ordernum LIMIT ${pageIndex}, ${pageEnd}`;
    try {
        let results = await ctx.execSql(sql);
        ctx.body = {
            success: 1,
            message: '',
            data: results
        };
    } catch (error) {
        ctx.body = {
            success: 0,
            message: '查询数据出错',
            data: null
        };
    }
}
