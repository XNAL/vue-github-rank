const follower = require('./follower');
const schedule = require('node-schedule');
const moment = require('moment');

exports.timeTask = function () {
    // 两个时间规则，降低爬虫频率，提高成功率
    let ruleChina = new schedule.RecurrenceRule();
    let ruleAll = new schedule.RecurrenceRule();

    let timesChina = [];
    let timesAll = [];
    for (let i = 0; i < 12; i++) {
        if(i % 3 === 0) {
            timesChina.push(i * 2);
            timesAll.push(i * 2 + 1);　　
        }
    }
    ruleChina.hour = timesChina;
    ruleChina.minute = 0;

    ruleAll.hour = timesAll;
    ruleAll.minute = 0;

    // 每隔6小时执行一次, 奇数小时
    schedule.scheduleJob(ruleChina, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取 100 most followers of china
        await follower.mostFollowers('china');
        console.log('中国区大神数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });

    // 每隔6小时执行一次, 偶数小时
    schedule.scheduleJob(ruleAll, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取 100 most followers
        await follower.mostFollowers('all');
        console.log('类别数组1的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
}
