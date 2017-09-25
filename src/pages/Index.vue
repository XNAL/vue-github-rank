<template>
    <rank-header :header-title="headerTitle"></rank-header>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'index',
    components: {
        "rank-header": Header
    },
    data() {
        return {
            headerTitle: '关于我gfd'
        }
    }
}
</script>


