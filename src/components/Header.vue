<template>
    <div>
        <header class="header">
            <div class="header-icon icon-menu" @click="showMenu">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-menu"></use>
                </svg>
            </div>
            <h2 class="header-title">{{ headerTitle }}</h2>
            <div class="header-icon icon-home">
                <router-link :to="{ name: 'Index' }">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-home"></use>
                    </svg>
                </router-link>
            </div>
        </header>
        <rank-menu :is-show="isShowMenu" @hide-menu="hideMenu"></rank-menu>
    </div>
</template>

<script>
import menu from '../components/Menu';

export default {
    name: 'index',
    components: {
        'rank-menu': menu
    },
    props: {
        headerTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isShowMenu: false
        };
    },
    methods: {
        showMenu: function() {
            this.isShowMenu = true;
        },
        hideMenu: function() {
            this.isShowMenu = false;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #45BDF6;
    letter-spacing: 2px;

    .header-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 4px;

        .icon {
            width: 24px;
            height: 24px;
        }

        &.icon-menu {
            left: 10px;
        }
        &.icon-home {
            right: 10px;
        }
    }
}
</style>


