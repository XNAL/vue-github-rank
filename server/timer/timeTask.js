const follower = require('./follower');
const stars = require('./stars');
const types = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'CoffeeScript', 'PHP', 'Ruby', 'Java', 'C', 'C++', 'C#'];
const schedule = require('node-schedule');
const moment = require('moment');

exports.timeTask = function () {
    var rule = new schedule.RecurrenceRule();
    // 本地测试使用，每半小时执行一次
    // var times = [];　　
    // for (var i = 1; i < 25; i++) {　　　　
    //     times.push(i);　　
    // }
    // rule.minute = [20, 50];

    // 上线使用，每隔6小时执行一次
    schedule.scheduleJob('0 0 0/6 * * ?', async function () {
        console.log('定时任务开始执行!', moment().format('YYYY-MM-DD HH:mm:ss'));
        // 获取最多follower的中国区大神
        await follower.mostFollowers();
        // 根据类型获取对应的stars排行项目数据
        for (let type of Object.values(types)) {
            await stars.mostStars(type);
        }
        console.log('Github数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
}
