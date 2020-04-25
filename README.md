[![Latest Version on NPM](https://img.shields.io/npm/v/vue-blob-json-csv.svg?style=flat-square)](https://npmjs.com/package/vue-blob-json-csv)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/vue-blob-json-csv.svg)](https://www.npmjs.com/package/vue-blob-json-csv)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)


# vue-blob-json-csv
Component library to download a JSON or CSV file using Vue.

<!-- ## Demo

[Link](https://dnrsm.github.io/vue-blob-json-csv/) -->

## Installation
- NPM / Yarn
```shell
$ yarn add vue-blob-json-csv
# or
$ npm i --save vue-blob-json-csv
```

- Modules
```javascript
import Vue from "vue";
import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.use(VueBlobJsonCsv)
```

- CDN
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="./dist/VueBlobJsonCsv.umd.min.js"></script>
<script>
  Vue.use(VueBlobJsonCsv.default);
  new Vue({
    el: "#app"
  })
</script>
```

## Usage
### Module
```vue
<template>
  <vue-blob-json-csv
    @success="handleSuccess"
    @error="handleError"
    tag-name="div"
    file-type="json"
    file-name="sample"
    title="Download JSON"
    :data="data"
    confirm="Do you want to download it?"
  >
</template>
```

- Use Slot
```vue
<template>
  <vue-blob-json-csv
    @success="handleSuccess"
    @error="handleError"
    file-type="json"
    file-name="sample"
    :data="data"
  >
    <h2>Title</h2>
    <p>csv download</p>
  </vue-blob-json-csv>
</template>
```

### CDN
```html
<body>
  <div id="app">
    <p>{{msg}}</p>
    <button @click="sayHello">Hi!</button>
    <vue-blob-json-csv
      file-type="json"
      file-name="todos"
      data="[
              {
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
              },
              {
                userId: 1,
                id: 2,
                title: 'quis ut nam facilis et officia qui',
                completed: false
              },
              {
                userId: 1,
                id: 3,
                title: 'fugiat veniam minus',
                completed: false
              }
            ]"
    >
      Download JSON
    </vue-blob-json-csv>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-blob-json-csv@latest/dist/VueBlobJsonCsv.umd.min.js"></script>
  <script>
    Vue.use(VueBlobJsonCsv.default);
    new Vue({
      el: "#app"
    })
  </script>
</body>
```


## Props
| Prop | Data Type | Required | Default | Description
| :--- | :--- | :--- | :--- | :--- |
| `tagName` | String | `false` | `span` | Element Tag Name
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