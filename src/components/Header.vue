<template>
    <header class="header">
        <div class="header-icon icon-menu" @click="$emit('show-menu')">
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
</template>

<script>
export default {
    name: 'index',
    props: {
        headerTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
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


