<template>
    <div>
        <div class="article" v-for="(item, index) in articleData">
            <div @click="gotoHandler(item)" class="article__title">
                {{ item.title }}
            </div>
            <div class="article__summary">
                {{ item.abstract }}
            </div>
            <div class="article__footer">
                <div class="article__footer-item">
                    <img v-if="!item.isPraise" class="article__footer-icon article__footer-icon-up " src="../../images/zan1.png" />
                    <img v-if="item.isPraise" class="article__footer-icon article__footer-icon-up " src="../../images/zan2.png" />
                    <span>{{ item.praiseTotal }}</span>
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
                <div class="article__footer-item" @click="thankHandler({topic_id: item._id, index: index, item: item})">
                    <img v-if="!item.isThank" class="article__footer-icon" src="../../images/collection1.png" />
                    <img v-if="item.isThank" class="article__footer-icon" src="../../images/collection2.png" />
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
        ...mapMutations([
            'changeArticleThankHandler'
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
        },
        thankHandler(params) {
            let thankResult = params.item && params.item.isThank ? 0 : 1;
            axios({
                method: 'post',
                url: Urls.thankApi,
                data: qs.stringify({
                    topic_id: params.topic_id,
                    isThank: thankResult
                }),
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }).then(res => {
                if (res.status !=200) {
                    this.$message('网络错误，请检查网络！');
                    return;
                }
                if (thankResult) {
                    this.$message({
                        type: 'success',
                        message: '谢谢鼓励！'
                    });
                } else {
                    this.$message({
                        type: 'success',
                        message: '取消感谢！'
                    });
                }
                this.changeArticleThankHandler({
                    index: params.index,
                    boolean: thankResult
                });
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
