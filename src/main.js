import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置element-ui
//1.导入组件库
import ElementUI from 'element-ui'
//2.导入组件样式相关
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//3.配置vue相关插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
