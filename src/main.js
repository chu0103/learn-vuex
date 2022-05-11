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

// 全局注册
// 方式一. 通过 Vue.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
// Vue.use(Button);

// 方式一. 通过Vue.component 注册
// 注册完成后，在模板中通过 <van-button> 标签来使用按钮组件
// import Vue from 'vue';
// import { Button } from 'vant';
// Vue.component(Button.name, Button)

// 局部注册
// 局部注册后，你可以在当前组件中使用注册的 Vant 组件。
// import { Button } from 'vant';
// export default {
//   components: {
//     [Button.name]: Button,
//   },
// };
