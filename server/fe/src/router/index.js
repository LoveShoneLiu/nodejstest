import Test from '../components/Test';
// import imageCom from 'componentsPath/imageCom';
// const imageCom = { template: '<div>图片</div>' };
const imageCom = () => import('componentsPath/ImageCom');
const adminCom = () => import('componentsPath/AdminCom');
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
const routes = [
    {
        path: '/',
        redirect: '/imageNav',
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/pageIndex',
        component: PageIndexCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/imageNav',
        component: imageCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/articleNav',
        component: articleCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/admin',
        component: adminCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/test',
        component: Test,
        meta: {
            requiresAuth: true
        }
    }, 
    // {
    //     path: '/login',
    //     component: Login
    // },

    // 如果未匹配到路由则跳转到pageIndex
    {
        path: '*',
        redirect: '/pageIndex',
        component: PageIndexCom,
        meta: {
            requiresAuth: true
        }
    }
]

export default routes;