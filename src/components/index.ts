import Vue from "vue";
import VueBlobJsonCsvComp from "./VueBlobJsonCsv.vue";

const VueBlobJsonCsv = {
  install(vue: typeof Vue, options?: any): void {
    vue.component("VueBlobJsonCsv", VueBlobJsonCsvComp);
  }
};

export default VueBlobJsonCsv;
