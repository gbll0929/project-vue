import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

// 基础样式
import './assets/css/base.css';

// 路由对象
import router from './plugins/router.js'

//引入axios插件的配置
import './plugins/axios'

//引入模板变量配置
import './config/template'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import SIdentify from './components/identify'
Vue.use(SIdentify)

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error=> error)
}


let vm = new Vue({
  render: h => h(App),
  router,
  data:{
	bLoading:false,
    bDocHeader:false,
    bBanner:false,
    bNav:false,
	bCommentBody:false,
	bToLogReg:false,
	bCopyright:false,
	bQuickToDoc:false,
	bGoTop:false,
	bToolbar:false,
	islog:"to-log-reg"
  }
}).$mount('#app')

export default vm;



