<template>
    <section class="list-component">
        <ul class="ul-list" v-if="dataList.length > 0">
            <li class="list-li" v-for="data in dataList" :key="data.id">
                <a class="avatar" :href="data.username | gitAddress" target="_blank">
                    <img :src="data.avatar" alt="用户头像">
                </a>
                <p class="names">
                    <a class="user-name" :href="data.username | gitAddress" target="_blank">
                        {{ data.username }}
                    </a>
                    <span class="nick-name">{{ data.nickname }}</span>
                </p>
                <p class="desc">
                    {{ data.introduction }}
                </p>
                <p class="location">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-location"></use>
                    </svg>
                    {{ data.location }}
                </p>
                <i class="rank">
                    {{ data.ordernum }}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-rank"></use>
                    </svg>
                </i>
            </li>
        </ul>
    </section>
</template>

<script>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.list-li {
    position: relative;
    padding: 0 20px 10px 80px;
    border-bottom: 1px solid #ddd;
    .avatar {
        position: absolute;
        left: 20px;
        top: 0;
        img {
            width: 48px;
            height: 48px;
        }
    }
    .names {
        margin: 10px 60px 10px 0;
        font-size: 16px;
        word-wrap: break-word;

        .user-name {
            color: #45BDF6;
        }
        .nick-name {
            margin-left: 5px;
        }
    }
    .desc,
    .location {
        color: #666;
        font-size: 14px;
        line-height: 18px;
    }
    .location {
        margin-top: 5px;
        color: #999;
        svg.icon {
            height: 18px;
            width: 18px;
            vertical-align: -4px;
        }
    }
    i.rank {
        position: absolute;
        bottom: 10px;
        right: 20px;
        color: #4cb549;
        font-size: 16px;

        svg.icon {
            height: 18px;
            width: 18px;
            vertical-align: -5px;
        }
    }
}
</style>


