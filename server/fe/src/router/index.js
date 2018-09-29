import App from '../components/App/App.vue';

// 这里不能通过这样定义组件，否则就需要编译器
// 如果你需要在运行时处理之前编译templates(例如, 有一个template选项，或者挂载到一个元素上，而你又将元素内的DOM元素作为模板来处理，这时候就需要编译器这部分进行完整编译。)
// 下面写法就是一个组件配置了template选项,就需要编译器，因为没有经过vue-loader
// 但是在单文件组件中同时配置template是不影响的，因为vue-loader会处理，但是这里的文件是不会经过vue-loader的。 
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

// 不使用上述方式定义组件的话，有俩种方式可以解决
// 1. 使用render函数,如下
// 2. 使用单文件组件，每个组件都定义一个.vue文件
const Foo = {
  render: h => h('div', 'foo')
};
const Bar = {
  render: h => h('div', 'bar')
};
// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
//     {
//         path: '/',
//         component: App,
//         children: [
//             { path: '/', redirect: '/foo' },
//             { path: '/foo', component: Foo },
//             { path: '/bar', component: Bar }
//         ]
//     }
// ]
const routes = [
  { path: "/", redirect: "/foo" },
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];
export default routes;