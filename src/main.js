import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  axios from 'axios'
Vue.use(jquery)
Vue.use(bootstrap)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http=axios

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

