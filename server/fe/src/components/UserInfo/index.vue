<template>
    <div class="clearfix">
        <span class="pull-left">
            用户名
        </span>
        <div class="pull-right login__operation">
            <span @click="modal1 = true">登录</span>
            <span>登出</span>
            <span>注册</span>
        </div>
        <Modal
            v-model="modal1"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>
                <span>用户名：</span>
                <input v-model="username" type="text" />
            </p>
            <p>
                <span>密码：</span>
                <input v-model="password" type="password" />
            </p>
        </Modal>
    </div>
</template>

<style scoped>
    .login__operation span {
        cursor: pointer;
    }
</style>

<script>
    import axios from 'axios';
    import qs from 'qs';
    export default {
        data () {
            return {
                modal1: false,
                username: '',
                password: ''
            }
        },
        methods: {
            ok () {
                axios({
                    method: 'post',
                    url: '/api/loginin',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data: qs.stringify({
                        userName: this.username,
                        password: this.password
                    })
                }).then(res => {
                    console.log('res', res);
                    if (res.status !=200) {
                        alert('网络错误，请检查网络！');
                    }
                    let data = res.data;
                    if (data.status == 1000) {
                        // 跳转到注册页！
                    } 
                });
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>