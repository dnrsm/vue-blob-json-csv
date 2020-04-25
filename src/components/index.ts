import { Vue } from "vue-property-decorator";
import VueBlobJsonCsvComp from "./VueBlobJsonCsv.vue";

const VueBlobJsonCsv = {
  install(vue: typeof Vue, options?: any): void {
    vue.component("VueBlobJsonCsv", VueBlobJsonCsvComp);
  }
};

export default VueBlobJsonCsv;
