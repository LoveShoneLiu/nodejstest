<template>
    <div>
        <div class="title-box">
            <textarea class="the-title" v-model="title" placeholder="标题" />
            <el-button class="title-publish" @click="publishArticleHandler">发布</el-button>
        </div>
        <div>
            <p>摘要</p>
            <textarea v-model="abstract"></textarea>
        </div>
        <div>
            <p>正文</p>
            <div ref="editor" style="text-align:left"></div>
        </div>
    </div>
</template>

<script>
import E from "wangeditor";
import axios from 'axios';
import qs from 'qs';
import { mapState, mapMutations } from 'vuex';
import Urls from 'jspath/common/urls';
import { getCookie } from 'jspath/common/utils';
export default {
    name: "editor",
    data() {
        return {
            editorContent: "",
            title: '',
            abstract: ''
        };
    },
    methods: {
        getContent: function() {
            alert(this.editorContent);
        }
    },
    mounted() {
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = html => {
            this.editorContent = html;
        };
        editor.create();
    },
    methods: {
        publishArticleHandler() {
            const self = this;
            axios({
                method: 'post',
                url: Urls.articleApi,
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify({
                    title: self.title,
                    abstract: self.abstract,
                    author: getCookie('userName'),
                    articleBody: self.editorContent,
                    // createDate: '',
                    // lastUpdateDate: '',
                    // praise: '',
                    // notPraise: ''
                })
            }).then(res => {
                if (res.status !=200) {
                    this.$message('网络错误，请检查网络！');
                }
                let data = res.data;
                self.imgData = data.data;
                console.log('loginoutData', data);
            });
        }
    }
};
</script>

<style>
.title-box {
    position: relative;
    text-align: center;
    margin-bottom: 20px;
}
.the-title {
    height: 50px;
    font-size: 24px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: rgb(246, 246, 246);
    width: 600px;
}
.title-publish {
    position: absolute;
    right: 0;
}
</style>
