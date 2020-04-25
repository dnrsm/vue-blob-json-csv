import { Vue } from "vue-property-decorator";
import VueBlobJsonCsvComp from "./VueBlobJsonCsv.vue";

export const VueBlobJsonCsv = {
  install(vue: typeof Vue, options?: any): void {
    vue.component("VueBlobJsonCsv", VueBlobJsonCsvComp);
  }
};
