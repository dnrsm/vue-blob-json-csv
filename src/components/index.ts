import { Vue } from "vue-property-decorator";
import VueBlobJsonCsv from "./VueBlobJsonCsv.vue";

export default {
  install(vue: typeof Vue, options?: any): void {
    vue.component("VueBlobJsonCsv", VueBlobJsonCsv);
  }
};

export { VueBlobJsonCsv };
