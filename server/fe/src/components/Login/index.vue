<template>
    <div class="login-page">
        <div class="login-con">
            <p class="user__modal-item">
                <span>用户名：</span>
                <input v-model="username" type="text" />
            </p>
            <p class="user__modal-item">
                <span>密码：</span>
                <input v-model="password" type="password" />
            </p>
            <p>
                <button @click="loginHandler">
                    登录
                </button>
            </p>
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
            username: '',
            password: '',
        }
    },
    methods: {
        ...mapMutations([
            'authenticatedHandler'
        ]),
        loginHandler() {
            axios({
                method: 'post',
                url: Urls.loginInApi,
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify({
                    userName: this.username,
                    password: this.password
                })
            }).then(res => {
                if (res.status !=200) {
                    this.$message('网络错误，请检查网络！');
                    return;
                }
                let data = res.data;
                if (data.statusCode == 1000) {
                    this.$message('登录成功');
                    this.isShowModal = false;
                    this.authenticatedHandler(true);
                    return;
                } else if(data.statusCode == 1002) {
                    this.$message('密码错误');
                    this.authenticatedHandler(false);
                } else if(data.statusCode == 1001) {
                    this.$message('请先注册');
                    this.authenticatedHandler(false);
                }
            });
        }
    }
}
</script>
<style scoped>
    .login-page {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .login-con {
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }
</style>
