<template>
    <header class="header">
        <h2 class="header-title">{{ headerTitle }}</h2>
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

</style>


