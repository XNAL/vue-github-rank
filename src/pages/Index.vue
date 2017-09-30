<template>
    <div class="index">
        <rank-header :header-title="headerTitle"></rank-header>
        <div class="main">
            <h3 class="title">说明</h3>
            <p class="content">本项目数据来源于Github网站，使用Node.js定时爬取网站数据，前端页面使用Vue.js开发。本项目只适用于相互交流学习。欢迎大家star和fork。</p>
            <h3 class="title">获取数据规则<span>（可能存在一定的偏差）</span></h3>
            <p class="content"><span class="mark">中国区100大神：</span>根据“location:china”获取数据</p>
            <p class="content"><span class="mark">各编程语言对应的开源项目：</span>取各编程语言“stars>500”的开源项目。如果超过100则取前100，不足则取全部。</p>
            <h3 class="title">技术栈</h3>
            <ul class="skill-list">
                <li class="skill">Node</li>
                <li class="skill">Koa2</li>
                <li class="skill">Vue2</li>
                <li class="skill">ES6</li>
                <li class="skill">HTML5</li>
                <li class="skill">CSS3</li>
                <li class="skill">Mysql</li>
                <li class="skill">Gulp</li>
                <li class="skill">Webpack</li>
            </ul>
            <h3 class="title">源码地址</h3>
            <p class="content">
                <a href="https://github.com/XNAL/vue-github-rank">Talk is cheap. Show me the Code.</a>
            </p>
        </div>
    </div>
</template>

<script>
import header from '../components/Header';

export default {
    name: 'index',
    components: {
        "rank-header": header
    },
    data() {
        return {
            headerTitle: '关于'
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    padding: 40px 20px 0;

    .title {
        line-height: 2;
        margin-top: 10px;
        span {
            font-weight: normal;
            font-size: 12px;
            color: #999;
        }
    }

    .content {
        line-height: 2;
        text-indent: 2em;
        .mark {
            font-weight: 600;
        }

        a {
            color: #45BDF6;
        }
    }

    .skill-list {
        .skill {
            line-height: 2;
            padding-left: 20px;
        }
    }
}
</style>



