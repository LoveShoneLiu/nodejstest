export default {
    articleDataHandler(state, data) {
        state.articleData = data.data || [];
        state.articleTotal = data.total || 0;
        state.currentPage = parseInt(data.currentPage || 1);
    },
    changeArticleTypeHandler(state, data) {
        state.articleType = data;
    }
}