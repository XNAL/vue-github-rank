<template>
    <section class="list-component">
        <ul class="ul-list">
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
                    {{ data.updatetime }}
                </p>
                <i class="stars">{{ data. stars }}</i>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'list',
    props: {
        dataList: []
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

