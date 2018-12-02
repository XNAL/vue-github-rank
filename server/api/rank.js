const router = require('koa-router')();
const controller = require('./rank.controller');

router.get('/follower', controller.follower);
router.get('/star', controller.star);

module.exports = router;