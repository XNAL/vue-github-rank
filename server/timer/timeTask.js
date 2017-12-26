const follower = require('./follower');
const stars = require('./stars');
// 分成两组，提高爬虫成功率
const types = ['JavaScript', 'TypeScript', 'HTML', 'CSS'];
const types2 = ['Python', 'CoffeeScript', 'PHP', 'Ruby'];
const types3 = ['Java', 'C', 'C++', 'C#'];
const schedule = require('node-schedule');
const moment = require('moment');
const helper = require('../helper');

exports.timeTask = function () {
    // 三个时间规则，降低爬虫频率，提高成功率
    let ruleChina = new schedule.RecurrenceRule();
    let rule = new schedule.RecurrenceRule();
    let rule2 = new schedule.RecurrenceRule();
    let rule3 = new schedule.RecurrenceRule();

    let timesChina = [],
        times = [],
        times2 = [];　　
    for (let i = 0; i < 12; i++) {
        if(i % 3 === 0) {
            timesChina.push(i * 2);
        }　　　　
        times.push(i * 2);　　
        times2.push(i * 2 + 1);
    }
    ruleChina.hour = timesChina;
    ruleChina.minute = 0;
    
    rule.hour = times;
    rule.minute = 20;

    rule2.hour = times2;
    rule2.minute = 0;

    rule3.hour = times2;
    rule3.minute = 40;

    // 每隔6小时执行一次
    schedule.scheduleJob(ruleChina, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取最多follower的中国区大神
        await follower.mostFollowers();
        console.log('中国区大神数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
    
    // 每隔2小时执行一次，偶数小时
    schedule.scheduleJob(rule, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 根据类型获取对应的stars排行项目数据
        for (let [idx, type] of Object.entries(types)) {
            await stars.mostStars(type);
            // 每个分类间隔一分钟
            await helper.sleep(60000);
        }
        console.log('类别数组1的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
    
    // 每隔2小时执行一次，奇数小时
    schedule.scheduleJob(rule2, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 根据类型获取对应的stars排行项目数据
        for (let [idx, type] of Object.entries(types2)) {
            await stars.mostStars(type);
            // 每个分类间隔一分钟
            await helper.sleep(60000);
        }
        console.log('类别数组2的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });   
    
    // 每隔2小时执行一次，奇数小时
    schedule.scheduleJob(rule3, async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 根据类型获取对应的stars排行项目数据
        for (let [idx, type] of Object.entries(types3)) {
            await stars.mostStars(type);
            // 每个分类间隔一分钟
            await helper.sleep(60000);
        }
        console.log('类别数组2的数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
}
