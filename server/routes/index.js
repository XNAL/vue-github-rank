const router =  require('koa-router')();
const rank = require('../api/rank');

router.use('/rankapi/rank', rank.routes(), rank.allowedMethods());

module.exports = router;