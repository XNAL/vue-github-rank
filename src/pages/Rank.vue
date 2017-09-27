<template>
    <div class="rank">
        <rank-header :header-title="headerTitle"></rank-header>
    </div>
</template>

<script>
import header from '../components/Header';


export default {
    name: 'rank',
    components: {
        'rank-header': header
    },
    data(){
        return {
            headerTitle: ''
        }
    },
    watch: {
        '$route': function() {
        this.headerTitle = this.$route.params.type;
        }
    },
    created() {
        this.headerTitle = this.$route.params.type;
    }
}
</script>
<style lang="scss" scoped>

</style>


