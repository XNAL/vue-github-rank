import async from './fetch';

const baseUrl = '/rankapi/rank';

export default {
    getChina(page = 1, pageNum = 20) {
        return async(`${baseUrl}/china`, {
                page: page,
                pagenum: pageNum
            })
            .then(data => data.data);
    },

    getStars(type, page = 1, pageNum = 20) {
        return async(`${baseUrl}/star`, {
                type: type,
                page: page,
                pagenum: pageNum
            })
            .then(data => data.data);
    }
}
