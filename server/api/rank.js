const router = require('koa-router')();
const controller = require('./rank.controller');

router.get('/china', controller.china);
router.get('/star', controller.star);

module.exports = router;