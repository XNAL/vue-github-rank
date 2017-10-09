<template>
    <div class="mask" @click="$emit('hide-menu')" v-if="isShow">
        <div class="menu" v-if="isShow">
            <div class="don-info">
                <a href="https://github.com/XNAL">
                    <img src="../assets/don.png" alt="" class="don-logo">
                    <div class="don">
                        <p class="author">Don</p>
                        <p>Powered by</p>
                    </div>
                </a>
            </div>
            <ul class="language-list">
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'China'}}" exact>中国区前100大神</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'JavaScript'}}" exact>JavaScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'TypeScript'}}" exact>TypeScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'HTML'}}" exact>HTML</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'CSS'}}" exact>CSS</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Python'}}" exact>Python</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'CoffeeScript'}}" exact>CoffeeScript</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'PHP'}}" exact>PHP</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Ruby'}}" exact>Ruby</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'Java'}}" exact>Java</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C'}}" exact>C</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C++'}}" exact>C++</router-link>
                </li>
                <li class="language">
                    <router-link :to="{name: 'Rank', params: {type: 'C#'}}" exact>C#</router-link>
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
    background: rgba(0, 0, 0, .2);
    z-index: 9998;
}


.menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 9999;
    width: 60%;
    max-width: 300px;
    color: #333;

    .don-info {
        position: relative;
        .don-logo {
            width: 100%;
        }
        div.don {
            position: absolute;
            bottom: 8px;
            left: 10px;
            color: #aaa;
            p.author {
                font-size: 16px;
                color: #fff;
                margin-bottom: 8px;
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

                &.router-link-exact-active {
                    color: #45BDF6;
                }
            }
        }
    }
}
</style>


