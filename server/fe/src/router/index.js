import Test from '../components/Test';
// import imageCom from 'componentsPath/imageCom';
// const imageCom = { template: '<div>图片</div>' };
const imageCom = () => import('componentsPath/imageCom');
const adminCom = () => import('componentsPath/adminCom');
// const articleCom = { template: '<div>文章</div>' };
// const Login = { template: '<div>登录页</div>' };
// const PageIndexCom = { template: '<div>首页</div>' };

const articleCom = {
    render: h => h('div', '文章')
};
const Login = {
    render: h => h('div', '登录页')
};
const PageIndexCom = {
    render: h => h('div', '首页')
};


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [{
        path: '/',
        redirect: '/imageNav'
    }, {
        path: '/pageIndex',
        component: PageIndexCom
    }, {
        path: '/imageNav',
        component: imageCom
    }, {
        path: '/articleNav',
        component: articleCom
    }, {
        path: '/admin',
        component: adminCom
    }, {
        path: '/test',
        component: Test
    }, {
        path: '/login',
        component: Login
    }]

export default routes;