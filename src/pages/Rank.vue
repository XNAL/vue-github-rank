<template>
    <div class="rank" ref="list">
        <rank-header :header-title="headerTitle"></rank-header>
        <rank-list :data-list="rankList" v-if="rankList.length > 0"></rank-list>
        <loading v-if="isShowLoading"></loading>
    </div>
</template>

<script>
import header from '../components/Header';
import list from '../components/List';
import loading from '../components/Loading';
import api from '../fetch/api';

export default {
    name: 'rank',
    components: {
        'rank-header': header,
        'rank-list': list,
        loading
    },
    data() {
        return {
            isShowLoading: true,
            headerTitle: '',
            rankList: [],
            page: 1,
            isEnding: false,
            $body: null,
            $list: null,
            clientHeight: 0
        }
    },
    watch: {
        '$route': function() {
            this.isEnding = false;
            this.rankList = [];
            this.getDataList();
        }
    },
    created() {
        this.getDataList();
    },
    mounted: function() {
        this.$body = document.body;
        this.clientHeight = this.$body.clientHeight;
        this.$list = this.$refs.list;
        window.addEventListener('scroll', this.debounce(this.loadMore));
    },
    methods: {
        getDataList() {
            this.headerTitle = this.$route.params.type;
            this.isShowLoading = true;

            api.getStars(this.$route.params.type, this.page)
                .then(data => {
                    if (data.length < 10) {
                        this.isEnding = true;
                    }
                    this.rankList.push(...data);
                    // this.rankList = data;
                    this.isShowLoading = false;
                });
        },
        loadMore: function() {
            let scrollTop = this.$body.scrollTop;
            let offsetHeight = this.$list.offsetHeight;
            console.log(document.body.scrollTop, offsetHeight, this.clientHeight);
            if (offsetHeight - scrollTop - this.clientHeight < 160) {
                if (this.isEnding === true) {
                    return;
                }
                console.log(this.page);
                this.page++;
                // this.isLoading = true;
                this.getDataList();
            }
        },
        debounce: function(fn, delay, timeout) {
            var timer = null;
            var last = new Date().getTime();
            delay = delay || 300;
            timeout = timeout || 300;
            return () => {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(fn, delay);
                if (new Date().getTime() > last + timeout) {
                    fn.apply(this, [].slice.call(Array, arguments));
                    last = new Date().getTime();
                    clearTimeout(timer);
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.rank {
    padding-top: 40px;
}
</style>


