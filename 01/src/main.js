import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
require('./utils/emiter');
import Notice from '../src/components/notice/notice';
// Notice.info
Vue.prototype.$Notice = Notice;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");