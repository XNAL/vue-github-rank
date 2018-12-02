<template>
    <div class="rank" ref="list">
        <rank-header :header-title="headerTitle"></rank-header>
        <rank-list :data-list="rankList" v-if="type.toLowerCase() !== 'china' && rankList.length > 0"></rank-list>
        <user-list :data-list="rankList" v-if="type.toLowerCase() === 'china' && rankList.length > 0"></user-list>
        <div class="no-more" v-if="!isShowLoading">- 没有更多了 -</div>
        <loading v-show="isShowLoading"></loading>
    </div>
</template>

<script>
import header from '../components/Header';
import list from '../components/List';
import userList from '../components/UserList';
import loading from '../components/Loading';
import api from '../fetch/api';

export default {
    name: 'rank',
    components: {
        'rank-header': header,
        'rank-list': list,
        'user-list': userList,
        loading
    },
    data() {
        return {
            isShowLoading: true,
            headerTitle: '',
            type: '',
            rankList: [],
            page: 1,
            pageNum: 20,
            isEnding: false,
            $docElement: null,
            $body: null,
            $list: null,
            clientHeight: 0
        }
    },
    watch: {
        '$route': function() {
            this.isEnding = false;
            this.isShowLoading = true;
            this.page = 1;
            this.rankList = [];
            this.type = this.$route.params.type;
            this.setHeaderTitle();
            this.getDataList();
        }
    },
    created() {
        this.type = this.$route.params.type;
        this.setHeaderTitle();
        this.getDataList();
    },
    mounted: function() {
        this.$docElement = document.documentElement;
        this.$body = document.body;
        this.clientHeight = this.$body.clientHeight;
        this.$list = this.$refs.list;
        window.addEventListener('scroll', this.debounce(this.loadMore));
    },
    methods: {
        getDataList() {
            if (this.type.toLowerCase() === 'china') {
                api.getChina(this.page)
                    .then(data => {
                        if (data.length < this.pageNum) {
                            this.isEnding = true;
                            this.isShowLoading = false;
                        }
                        this.rankList.push(...data.items);
                        this.isCurrentPageEnd = true;
                    });
            } else {
                api.getStars(this.$route.params.type, this.page)
                    .then(data => {
                        if (data.items.length < this.pageNum || this.page > 10) {
                            this.isEnding = true;
                            this.isShowLoading = false;
                        }
                        this.rankList.push(...data.items);
                    });
            }
        },
        setHeaderTitle() {
            if (this.type.toLowerCase() === 'china') {
                this.headerTitle = '中国区前100大神';
            } else {
                this.headerTitle = this.type;
            }
        },
        loadMore: function() {
            let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
            let offsetHeight = this.$list.offsetHeight;
            if (offsetHeight - scrollTop - this.clientHeight < 160) {
                if (this.isEnding === true) {
                    return;
                }
                this.page++;
                this.isShowLoading = true;
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

    .no-more {
        line-height: 32px;
        text-align: center;
        color: #999;
    }
}
</style>


