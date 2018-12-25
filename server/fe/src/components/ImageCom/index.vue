<template>
    <div class="img__com clearfix">
        <div v-for="item in imgData" class="img__com-item pull-left">

        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import { mapState, mapMutations } from 'vuex';
    import Urls from 'jspath/common/urls';
    export default {
        data() {
            return {
                imgData: [1,2,3,4,5,6,7,8,9]
            }
        },
        mounted() {
            axios({
                method: 'post',
                url: Urls.getImagesApi,
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }).then(res => {
                if (res.status !=200) {
                    this.$message('网络错误，请检查网络！');
                }
                let data = res.data;
                console.log('loginoutData', data);
                if (data.statusCode == 1000) {
                    this.authenticatedHandler(false);
                }
            });

            // webpack-api-mocker 的api
            // axios({
            //     method: 'get',
            //     url: Urls.testApi,
            //     headers: { 'content-type': 'application/x-www-form-urlencoded' }
            // }).then(res => {
            //     // debugger;
            //     if (res.status !=200) {
            //         this.$message('网络错误，请检查网络！');
            //     }
            //     let data = res.data;
            //     console.log('loginoutData', data);
            //     if (data.statusCode == 1000) {
            //         this.authenticatedHandler(false);
            //     }
            // });
        },
    }
</script>
<style>
    .img__com-item {
        width: 400px;
        height: 400px;
        border: 2px solid black;
        margin-left: 20px;
        margin-bottom: 20px;
    }
</style>