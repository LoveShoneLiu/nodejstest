<template>
    <div>
        <div class="article" v-for="item in articleData">
            <div @click="gotoHandler(item)" class="article__title">
                {{ item.title }}
            </div>
            <div class="article__summary">
                {{ item.abstract }}
            </div>
            <div class="article__footer">
                <div class="article__footer-item">
                    <img class="article__footer-icon article__footer-icon-up " src="../../images/zan1.png" />
                    <span>{{ item.praise }}</span>
                </div>
                <div class="article__footer-item">
                    <img class="article__footer-icon article__footer-icon-down" src="../../images/zan1.png" />
                    <span>{{ item.notPraise }}</span>
                </div>
                <div class="article__footer-item">
                    <img class="article__footer-icon" src="../../images/edit.png" />
                    <span>评论</span>
                </div>
                <div class="article__footer-item">
                    <img class="article__footer-icon" src="../../images/heart1.png" />
                    <span>收藏</span>
                </div>
                <div class="article__footer-item">
                    <img class="article__footer-icon" src="../../images/collection.png" />
                    <span>感谢</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { mapState, mapMutations } from 'vuex';
import Urls from 'jspath/common/urls';
import { getCookie } from 'jspath/common/utils';
export default {
    data() {
        return {
            articleData: []
        }
    },
    methods: {
        gotoHandler(item) {
            this.$router.push({
                path: '/showArticle',
                query: {
                    _id: item._id
                }
            });
        }
    },
    mounted() {
        const self = this;
        axios({
            method: 'post',
            url: Urls.getArticleApi,
            data: qs.stringify({
                page: 1,
                count: 10
            })
        }).then(res => {
            if (res.status !=200) {
                this.$message('网络错误，请检查网络！');
            }
            let data = res.data;
            self.articleData = data.data;
            console.log('articleData', data);
        });
    }
}
</script>

<style scoped>
.article {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 6px;
}
.article__title {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
.article-link {
    color: #666;
}
.article__summary {
    font-size: 15px;
    padding: 6px 0;
}
.article__footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.article__footer-item {
    margin-right: 18px;
}
.article__footer-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    vertical-align: middle;
}
.article__footer-icon-down {
    transform: rotate(180deg);
}
</style>
