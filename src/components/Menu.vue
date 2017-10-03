<template>
    <div class="mask" @click="$emit('hide-menu')" v-if="isShow">
        <div class="menu" v-if="isShow">
            <div class="don-info">
                <a href="https://github.com/XNAL">
                    <img src="../assets/don.jpg" alt="" class="don-logo">
                    <p class="don">Develop by
                        <span>Don</span>
                    </p>
                </a>
            </div>
            <ul class="language-list">
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'China'}}">中国区前100大神</router-link>
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
    z-index: 9998;
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

    .don-info {
        position: relative;
        .don-logo {
            width: 100%;
        }
        p.don {
            position: absolute;
            bottom: 5px;
            right: 10px;
            color: #aaa;
            span {
                font-size: 16px;
                color: #fff;
            }
        }
    }

    .language-list {
        .language {
            line-height: 40px;
            padding-left: 30px;
            border-bottom: 1px solid #ddd;
            letter-spacing: 2px;

            a {
                display: inline-block;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>


