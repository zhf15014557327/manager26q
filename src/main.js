import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);
// 导入全局css
import "./assets/bace.css";
// 导入插件axios
import VueAxios from "./lib/vue-axios";
Vue.use(VueAxios);

import router from "./lib/router"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});