// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入项目所需要的模块 路由
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import app from './App'
import VueRouter from "vue-router"
import vueResource from "vue-resource"
import addblog from '@/components/addblog'
import blog from '@/components/blog'
import home from '@/components/home'
import add from '@/components/add'
import datail from '@/components/datail'
import edit from '@/components/edit'
import blogDisplay from '@/components/blogDisplay'

//自定义指令
Vue.directive('col', {
  bind(el, bingding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  
  }
})

//自定义指令
Vue.directive('coll', {
  bind(el, bingding, vnode) {
    // el.style.color = "#" + Math.random().toString(16).slice(2,8);
    // el.style.background = "#ccc";
  }
})


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(vueResource)


//设置路由
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: home },
    { path: "/addblog", component: addblog },
    { path: "/add", component: add },
    { path: "/costomer/:id", component: datail },
    { path: "/edit/:id", component: edit },
    { path: "/blog", component: blog },
    { path: "/blog/:id", component:blogDisplay  },
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
            <nav class="navbar navbar-defaulf">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">用户管理系统</a>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li><router-link to="/">主页</router-link></li>
                  <li><router-link to="/addblog">添加博客</router-link></li>
                  <li><router-link to="/blog">我的博客</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">

                <li><router-link to="/add">添加用户</router-link></li>
                </ul>
                </div><!--/.nav-collapse -->
                </div>
                </nav>
                <router-view></router-view>
                </div>
                `,
}).$mount("#app")

              // <li><router-link to="/sign">登陆</router-link></li>
              // <li><router-link to="/register">注册</router-link></li>