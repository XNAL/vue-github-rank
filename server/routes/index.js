const router =  require('koa-router')();
const rank = require('../api/rank');

router.use('/api/rank', rank.routes(), rank.allowedMethods());

module.exports = router;