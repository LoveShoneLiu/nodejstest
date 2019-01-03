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
                <div class="article__footer-item" @click="gotoHandler(item)">
                    <img class="article__footer-icon" src="../../images/edit.png" />
                    <span>评论</span>
                </div>
                <!-- <div class="article__footer-item">
                    <img class="article__footer-icon" src="../../images/heart1.png" />
                    <span>收藏</span>
                </div> -->
                <div class="article__footer-item">
                    <img class="article__footer-icon" src="../../images/collection.png" />
                    <span>感谢</span>
                </div>
            </div>
        </div>
        <div style="text-align: center;">
            <el-pagination
                :page-size="10"
                :pager-count="11"
                layout="prev, pager, next"
                :total="articleTotal"
                :current-page="currentPage"
                @current-change="pageChangeHandler"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { mapState, mapMutations, mapActions } from 'vuex';
import Urls from 'jspath/common/urls';
import { getCookie } from 'jspath/common/utils';
export default {
    data() {
        return {
        }
    },
    computed: mapState({
        articleData: state =>  {
            return state.articleData
        },
        articleTotal: state => state.articleTotal,
        currentPage: state => state.currentPage
    }),
    methods: {
        ...mapActions([
            'getArticleAsync'
        ]),
        gotoHandler(item) {
            this.$router.push({
                path: '/showArticle',
                query: {
                    _id: item._id
                }
            });
        },
        pageChangeHandler(val) {
            this.getArticleAsync({
                context: this,
                page: val,
                count: 10,
                label: ''
            });
        }
    },
    mounted() {
        const self = this;
        this.getArticleAsync({
            context: this,
            page: 1,
            count: 10,
            label: ''
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
    cursor: pointer;
}
.article__footer-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.article__footer-icon-down {
    transform: rotate(180deg);
}
</style>
