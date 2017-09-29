<template>
    <section class="list-component">
        <ul class="ul-list" v-if="dataList.length > 0">
            <li class="list-li" v-for="data in dataList" :key="data.id">
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
                    {{ data.updatetime }}
                </p>
                <i class="stars">
                    {{ data. stars }}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-star"></use>
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
    padding: 5px 20px 10px;
    border-bottom: 1px solid #ddd;

    .names {
        font-size: 16px;
        line-height: 32px;
        color: #45BDF6;
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
            vertical-align: -3px;
            // margin-right: 2px;
        }
    }
    i.stars {
        position: absolute;
        top: 13px;
        right: 20px;

        svg.icon {
            height: 18px;
            width: 18px;
            vertical-align: -4px;
        }
    }
}
</style>


