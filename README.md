## 前言

之前[使用node.js开发一个小爬虫](https://github.com/XNAL/node-MovieSpider)，算是初步对爬虫有了一定的了解，但爬取的数据没什么意义。最近使用Github的频率比较高，所以准备爬取一些Github的数据玩下。目前爬取了中国区followers排名前100的大神，以及各个编程语言stars大于1000的开源项目。

## 源码

[Talk is cheap. Show me the code.](https://github.com/XNAL/vue-github-rank)

## 访问地址

- [访问地址：http://www.tdon.site/vue-github-rank/](http://www.tdon.site/vue-github-rank/)（pc端开启手机模式浏览效果更佳）

- 扫描二维码

![二维码](https://github.com/XNAL/vue-github-rank/blob/master/screenshorts/rank-qrcode.png)

## 如何使用

    git clone https://github.com/XNAL/vue-github-rank
    
    // 需要先安装mysql，并创建数据库，可参考源码中的`github_rank.sql`
    
    cd vue-github-rank
    npm init
    
    // 启动node服务
    gulp nodemon 
    
    // 本地运行需另开一个终端框口并执行以下命令，然后访问`http://localhost:8080/`
    npm run dev
    
## 技术栈

- [vue.js](https://cn.vuejs.org/)： 前端页面展示。
- [axios](https://github.com/axios/axios): vue官方推荐HTTP库，请求后端数据。
- [阿里巴巴的矢量图标库Iconfont](http://www.iconfont.cn/): 页面图标，个人项目中使用起来比较方便。
- [node.js](https://nodejs.org/en/) + [Koa2](http://koajs.com/)： 后台服务器搭架，（Koa2需要node v7.6以上）。
- ES6/ES7： 后台开发以ES6语法为主，并使用了ES7中的`async/await`。
- [gulp](https://gulpjs.com/)： 后台服务器使用，自动化构建工具。
- [webpack](https://webpack.js.org/)： vue-cli自带的。需要配置本地代理`proxyTable`，以及配置`SCSS`的相关loader。
- MySql: 数据保存。
- [superagent](http://visionmedia.github.io/superagent/): 比node.js原生http模块更好用的客户端请求代理模块。
- [cheerio](https://github.com/cheeriojs/cheerio)：服务端jQuery，分析网页内容。
- [node-schedule](https://github.com/node-schedule/node-schedule): node.js定时执行模块。

## 说明

1. 关于爬虫爬取数据的说明：目前是每2个小时去Github官网爬取数据，取到的数据会存入数据库中。在爬取的过程中可能会出现单个页面一直无法取到数据的情况，为避免程序一直卡在此步骤，目前是单个页面数据循环请求50次，如果仍取不到数据则跳过此项数据的爬取，等待下一次再进行爬取。

2. 数据库字符集需要设置为`utf8mb4`，因为需要存取emoji表情。

## 项目截图

### 关于（首页）

![关于（首页）](https://github.com/XNAL/vue-github-rank/blob/master/screenshorts/about.png")

### 中国区前100大神

![中国区前100大神](https://github.com/XNAL/vue-github-rank/blob/master/screenshorts/china.png")

### 目录

![目录](https://github.com/XNAL/vue-github-rank/blob/master/screenshorts/menu.png")

### 项目

![项目](https://github.com/XNAL/vue-github-rank/blob/master/screenshorts/project.png")