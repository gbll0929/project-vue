import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//代表着所有组件 引入了,意味着所有的样式 都插入到style标签了
import Home from '../pages/home.vue'
import Introduce from '../components/introduce/introduce.vue'

import DocList from '../pages/doc-list.vue'
import Discount from '../pages/discount.vue'
import Dynamic from '../pages/dynamic.vue'
import DocCase from '../pages/doc-case.vue'
import RouteLine from '../pages/route-line.vue'

import User from '../pages/user.vue'
import Reg from '../pages/reg.vue'
import Login from '../pages/login.vue'
import Detail from '../pages/detail.vue'
import News from '../pages/news.vue'
import BannerNews from '../pages/banner-news.vue'
import NoPage from '../pages/no-page.vue'
import Comment from '../pages/comment.vue'

let routes=[
  {path:'/home',name:"home",component:Introduce},
  {path:'/introduce',component:Introduce},
  {path:'/doc-list',component:DocList},
  {path:'/discount',component:Discount},
  {path:'/dynamic',component:Dynamic},
  {path:'/comment',component:Comment},
  
  {path:'/doc-case',component:DocCase},
  {path:'/route-line',component:RouteLine},
  {path:'/user',component:User},
  {path:'/reg',component:Reg},
  {path:'/login',component:Login},
  {path:'/detail/:_id',component:Detail},
  {path:'/news/:_id',component:News},
  {path:'/banner-news/:_id',component:BannerNews},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to,from,savedPosition){
        return { x: 0, y: 0 }//对于所有路由导航，简单地让页面滚动到顶部
  }

});

export default router;