import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 它能根据的手机尺寸来调整rem的基准值
import 'amfe-flexible'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
