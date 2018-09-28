import Test from '../components/Test';
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const imageCom = { template: '<div>图片</div>' };
const articleCom = { template: '<div>文章</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [{
        path: '/',
        redirect: '/imageNav'
    }, {
        path: '/imageNav',
        component: imageCom
    }, {
        path: '/articleNav',
        component: articleCom
    }, {
        path: '/test',
        component: Test
    }]

export default routes;