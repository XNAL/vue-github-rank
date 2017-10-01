<template>
    <section class="list-component">
        <ul class="ul-list" v-if="dataList.length > 0">
            <li class="list-li" v-for="(data, index) in dataList" :key="data.id">
                <p class="names">
                    <a :href="data.projectname | gitAddress">
                        {{ data.projectname }}
                    </a>
                </p>
                <p class="desc">
                    {{ data.introduction }}
                </p>
                <p class="time">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-time"></use>
                    </svg>
                    {{ data.updatetime | fromatTime}}
                </p>
                <i class="rank">
                    {{ data.ordernum }}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-rank"></use>
                    </svg>
                </i>
                <i class="stars">
                    {{ data. stars}}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                </i>
            </li>
        </ul>
    </section>
</template>

<script>
import moment from 'moment';
export default {
    name: 'list',
    props: {
        dataList: Array
    },
    data() {
        return {
        }
    },
    filters: {
        gitAddress: function(name) {
            return `https://github.com/${name}`;
        },
        fromatTime(updated) {
            // moment.js提供的fromNow()方法并不符合我的需求，所以手动计算时间
            let diffTime = Math.floor((Date.now() - new Date(updated).getTime()) / 60 / 1000);
            if (diffTime > 365 * 24 * 60) {
                // 大于一年（按365天计算）
                return `Updated on ${moment(updated).format('D MMM YYYY')}`;
            }
            else if (diffTime > 28 * 24 * 60) {
                // 大于一月（按最少的28天计算）
                return `Updated on ${moment(updated).format('D MMM')}`;
            }
            else if (diffTime > 24 * 60) {
                // 一月以内的时间
                return `Update ${Math.floor(diffTime / 24 / 60)} days ago`;
            }
            else if (diffTime > 60) {
                // 一天以内的时间
                return `Update ${Math.floor(diffTime / 60)} hours ago`;
            } else if (diffTime > 1) {
                // 一小时以内的时间
                return `Update ${diffTime} minutes ago`;
            } else {
                // 一分钟以内的时间
                return `Update in a minute`;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list-li {
    position: relative;
    padding: 0 20px 10px;
    border-bottom: 1px solid #ddd;

    .names {
        margin: 10px 60px 10px 0;
        font-size: 16px;
        color: #45BDF6;
        word-wrap: break-word;
    }
    .desc,
    .time {
        color: #666;
        font-size: 14px;
        line-height: 18px;
    }
    .time {
        margin-top: 5px;
        color: #999;
        svg.icon {
            height: 16px;
            width: 16px;
            vertical-align: -3px; // margin-right: 2px;
        }
    }
    i.rank,
    i.stars {
        position: absolute;
        right: 20px;

        svg.icon {
            height: 18px;
            width: 18px;
            vertical-align: -5px;
        }
    }
    i.rank {
        bottom: 10px;
        color: #4cb549;
        font-size: 16px;
    }
    i.stars {
        top: 0;
    }
}
</style>


