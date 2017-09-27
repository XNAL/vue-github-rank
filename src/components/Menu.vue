<template>
    <div class="mask" @click="$emit('hide-menu')" v-if="isShow">
        <div class="menu" v-if="isShow">
            <h3 class="category">分类选项</h3>
            <ul class="language-list">
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'China'}}">中国区100大神</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'JavaScript'}}">JavaScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'TypeScript'}}">TypeScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'HTML'}}">HTML</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'CSS'}}">CSS</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Python'}}">Python</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'CoffeeScript'}}">CoffeeScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'PHP'}}">PHP</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Ruby'}}">Ruby</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Java'}}">Java</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C'}}">C</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C++'}}">C++</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C#'}}">C#</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Objective-C'}}">Objective-C</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu',
    props: {
        isShow: Boolean
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0); 
}


.menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    box-shadow: 1px 0 10px #999;
    z-index: 9999;
    width: 160px;
    color: #333;

    .category {
        height: 40px;
        line-height: 40px;
        background: #45BDF6;
        color: #fff;
        text-align: center;
        letter-spacing: 2px;
    }

    .language-list {
        .language {
            line-height: 40px;
            padding-left: 20px;
            border-bottom: 1px solid #ddd;
            letter-spacing: 2px;
        }
    }
}
</style>


