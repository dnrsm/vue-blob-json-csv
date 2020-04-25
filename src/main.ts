import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import VueScrollToggleClass from "vue-scroll-toggle-class";
Vue.use(VueScrollToggleClass);
import VueBlobJsonCsv from "vue-blob-json-csv";
// Vue.use(VueBlobJsonCsv);
Vue.component("VueBlobJsonCsv", VueBlobJsonCsv);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
