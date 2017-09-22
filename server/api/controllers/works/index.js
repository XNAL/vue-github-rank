const router = require('koa-router')();
const controller = require('./works.controller.js');

router.get('/user', controller.get);


module.exports = router;