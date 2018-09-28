<template>
    <div class="page__parent">
        <div class="page__nav clearfix">
            <router-link to="/imageNav">图片</router-link>
            <router-link to="/articleNav">文章</router-link>
            <UserInfo class="page__nav-item pull-right"></UserInfo>
        </div>
        <router-view>

        </router-view>
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
<style>
    .page__parent {
        width: 1280px;
        margin: 0 auto;
    }
    .page__nav {
        border: 1px solid black;
    }
</style>