const follower = require('./follower');
const stars = require('./stars');
const types = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'CoffeeScript', 'PHP', 'Ruby', 'Java', 'C', 'C++', 'C#', 'Objective-C'];


// 启动时直接执行代码 
(async function init() {
    // 获取最多follower的中国区大神
    await follower.mostFollowers();
    // 根据类型获取对应的stars排行项目数据
    for(let type of Object.values(types)) {
        await stars.mostStars(type);
    }
    console.log('Github数据更新完成！');
})();


