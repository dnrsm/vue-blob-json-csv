<template>
  <component :is="tagName" ref="download" @click="handleDownload()">
    <template v-if="title === ''">
      <slot></slot>
    </template>
    <template>
      {{ title }}
    </template>
  </component>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VueBlobJsonCsv",
  props: {
    tagName: {
      type: String,
      required: false,
      default: "span"
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    fileType: {
      type: String,
      required: true,
      default: ""
    },
    fileName: {
      type: String,
      required: false,
      default: "data"
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    fields: {
      type: Array,
      required: false,
      default: () => []
    },
    confirm: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    handleDownload() {
      let content = null;

      if (this.confirm !== null) {
        const result = confirm(this.confirm);
        if (!result) return;
      }

      if (this.fileType === "json") {
        content = JSON.stringify(this.data);
      } else if (this.fileType === "csv") {
        const keys =
          this.fields.length > 0
            ? this.fields
            : Object.keys(this.data[0] as string[]);
        let csv = `\ufeff${keys.join()}\n`;
        this.data.forEach((el: any) => {
          let line = keys
            .map((item: any) => {
              if (el[item] === null) {
                return null;
              } else if (typeof el[item] === "object") {
                return JSON.stringify([el[item]]);
              } else {
                return [el[item]];
              }
            })
            .join(",");
          csv += `${line}\n`;
        });
        content = csv;
      } else {
        this.$emit("error");
        return;
      }

      const blob = new Blob([content], {
        type: `application/${this.fileType}`
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${this.fileName}.${this.fileType}`;
      link.click();
      this.$emit("success");
    }
  }
});
</script>
