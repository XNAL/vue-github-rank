import async from './fetch';

const baseUrl = '/rankapi/rank';

const starBaseUrl = 'https://api.github.com/search/repositories'

export default {
    getChina(page = 1, pageNum = 20) {
        return async(`${baseUrl}/follower`, {
                page,
                pageNum,
                type: 'china'
            })
            .then(data => data.data);
    },

    getStars(type, page = 1, pageNum = 20) {
        return async(`${starBaseUrl}`, {
                q: type,
                sort: 'stars',
                page: page,
                order: 'desc',
                per_page: pageNum
            })
            .then(data => data);
    }
}
