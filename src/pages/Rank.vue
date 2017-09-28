<template>
    <div class="rank">
        <rank-header :header-title="headerTitle"></rank-header>
        <rank-list :data-list="rankList"></rank-list>
    </div>
</template>

<script>
import header from '../components/Header';
import list from '../components/List';
import api from '../fetch/api';

export default {
    name: 'rank',
    components: {
        'rank-header': header,
        'rank-list': list
    },
    data() {
        return {
            headerTitle: '',
            rankList: [],
            page: 1
        }
    },
    watch: {
        '$route': function() {
            this.headerTitle = this.$route.params.type;
        }
    },
    created() {
        this.headerTitle = this.$route.params.type;
        
        api.getStars(this.$route.params.type, this.page)
            .then(data => {
                console.log('data', data);
            });
    }
}
</script>
<style lang="scss" scoped>

</style>


