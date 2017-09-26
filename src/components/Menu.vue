<template>
    <div :class="['menu', {show: isShow}]">
        目录
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
.menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    border-right: 1px solid #ccc;
    z-index: 9999;
    width: 200px;
    transform: translateX(-100%);
    transition: transform .15s;

    &.show {
        transform: translateX(0);
    }
}
</style>


