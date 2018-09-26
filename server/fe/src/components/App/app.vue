<template>
    <div>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
        <div class="header__bar">
            <div class="logo">login</div>
            <div class="header__bar-user">
                <span>name</span>
                <button>login out</button>
            </div>
            <div class="header__bar-login">
                <button>login in</button>
                <button>register</button>
            </div>
        </div>
        <div>
            <div>
                <span>用户名：</span>
                <input type="text" v-model="username" />
            </div>
            <div>
                <span>密码：</span>
                <input type="password" v-model="password" />
            </div>
            <button v-on:click="loginInHandler">提交</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    export default ({
        data() {
            return {
                username: '',
                password: ''
            }
        },
        components: {},
        methods: {
            loginInHandler() {
                axios({
                    method: 'post',
                    url: '/api/loginin',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data: qs.stringify({
                        username: this.username,
                        password: this.password
                    })
                }).then(res => {
                    console.log('res', res);
                });
            }
        },
        mounted() {}
    })
</script>
<style>
    .header__bar {
        height: 80px;
        border: 1px solid black;
        overflow: hidden;
    }
    .logo {
        float: left;
        margin-right: 20px;
    }
    .header__bar-user {
        float: left;
        margin-right: 20px;
    }
    .header__bar-login {
        float: left;
        margin-right: 20px;
    }
</style>