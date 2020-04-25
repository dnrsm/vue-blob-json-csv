[![Latest Version on NPM](https://img.shields.io/npm/v/vue-blob-json-csv.svg?style=flat-square)](https://npmjs.com/package/vue-blob-json-csv)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/vue-blob-json-csv.svg)](https://www.npmjs.com/package/vue-blob-json-csv)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)


# vue-blob-json-csv
Component library to download a JSON or CSV file using Vue.

<!-- ## Demo

[Link](https://dnrsm.github.io/vue-blob-json-csv/) -->

## Installation
```shell
$ yarn add vue-blob-json-csv
# or
$ npm i --save vue-blob-json-csv
```

## Global Registration
Register the component
```javascript
import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.component('vue-blob-json-csv', VueBlobJsonCsv);
```

## Local Registration
### Usage
```vue
<script>
import VueBlobJsonCsv from "vue-blob-json-csv";

export default {
  components: {
    VueBlobJsonCsv
  }
}
</script>
```

## Usage
```vue
<template>
  <vue-blob-json-csv
    @success="handleSuccess"
    @error="handleError"
    file-type="json"
    file-name="sample"
    title="Download JSON"
    :data="data"
    confirm="download it?"
  >
</template>
```

### Use Slot
```vue
<template>
  <vue-blob-json-csv
    @success="handleSuccess"
    @error="handleError"
    file-type="json"
    file-name="sample"
    :data="data"
    confirm="download it?"
  >
    <h2>Title</h2>
    <p>csv download</p>
  </vue-blob-json-csv>
</template>
```


## Props
| Prop | Data Type | Required | Default | Description
| :--- | :--- | :--- | :--- | :--- |
| `tagName` | String | `false` |  | Element Tag Name
| `title` | String | `false` |  | Button title name
| `fileType` | String | `true` | `csv` | File extension (`csv` or `json`)
| `fileName` | String | `false` | `data` | File name
| `data` | Array | `true` |  | Data you want to export
| `fields` | Array | `false` |  | Export only specific keys
| `confirm` | String | `false` |  | Text to display in the dialog

## Events
| Event | Description
| :--- | :--- |
| `success` | Event after download is complete
| `error` | Error


## Contributing
Welcome to improve vue-blob-json-csv with any issue, pull request or code review.

```bash
# Setup
$ cd vue-blob-json-csv
$ yarn

# dev-server
$ yarn serve

# Build
$ yarn build:lib

# Unit Testing
$ yarn test:unit

# Lint
$ yarn lint
# Lint - fix
$ yarn lint --fix
```

## License
MIT