<template>
    <div class="page__parent">
        <div class="page__nav-box">
            <div class="page__nav clearfix">
                <router-link class="page__nav-item" to="/pageIndex">首页</router-link>
                <router-link class="page__nav-item" to="/imageNav">图片</router-link>
                <router-link to="/articleNav">文章</router-link>
                <UserInfo class="pull-right"></UserInfo>
            </div>
        </div>
        <div class="main__box">
            <router-view>
            </router-view>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import UserInfo from '../UserInfo';
    export default ({
        components: {
            UserInfo
        }
    })
</script>
<style scoped>
    .page__parent {
        width: 100%;
    }
    .page__nav-box {
        width: 100%;
    }
    .page__nav {
        width: 1280px;
        height: 60px;
        /* line-height: 60px; */
        margin: 0 auto;
        border: 1px solid black;
    }
    .page__nav-item {
        line-height: 60px;
    }
    .main__box {
        width: 1280px;
        margin: 0 auto;
    }
</style>