const follower = require('./follower');
const starsApi = require('./starsApi')
const helper = require('../helper')
const schedule = require('node-schedule');
const moment = require('moment');
const languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'PHP', 'Java', 'C', 'C++', 'C#', 'IOS', 'Android', 'Swfit'];

exports.timeTask = function () {
    // 两个时间规则，降低爬虫频率，提高成功率
    let ruleChina = new schedule.RecurrenceRule();
    let ruleAll = new schedule.RecurrenceRule();
    let ruleLanguage = new schedule.RecurrenceRule();

    ruleChina.hour = [1];
    ruleChina.minute = 0;

    ruleAll.hour = [2];
    ruleAll.minute = 0;

    ruleLanguage.hour = [3];
    ruleLanguage.minute = 0;

    // 每隔6小时执行一次, 奇数小时
    schedule.scheduleJob(ruleChina, async function () {
        console.log('China most followers定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取 100 most followers of china
        await follower.mostFollowers('china');
        console.log('China most followers数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });

    // 每隔6小时执行一次, 偶数小时
    schedule.scheduleJob(ruleAll, async function () {
        console.log('All most followers定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取 100 most followers
        await follower.mostFollowers('all');
        console.log('All most followers的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });

    schedule.scheduleJob(ruleLanguage, async function () {
        console.log('language定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        for(let [idx, item] of languages.entries()) {
            await starsApi.mostStars(item)
            // 每个分类间隔两分钟
            await helper.sleep(120000)
        }
        console.log('language的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
}
