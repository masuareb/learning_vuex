import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon";

Vue.config.productionTip = false;
Vue.component('BaseIcon', BaseIcon)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
