<template>
  <div id="app">
    <a href="https://github.com/dnrsm/vue-blob-json-csv" class="github_ribbon">
      <img
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
    <div class="container">
      <h1 class="title">Vue JSON or CSV Export</h1>
      <div class="columns">
        <p class="column">Download FILE</p>
      </div>
      <nav class="columns">
        <div class="column is-half">
          <vue-blob-json-csv
            @error="handleError"
            title="Download Todos JSON"
            file-type="json"
            file-name="todos"
            :data="todos"
            class="button is-primary"
          />
          <vue-blob-json-csv
            @error="handleError"
            title="Download Todos CSV"
            file-type="csv"
            file-name="todos"
            :data="todos"
            :fields="fieldsKey"
            class="button is-link"
          />
          <div class="column">
            <div>
              <h1 class="title">Todos</h1>
              <vue-json-pretty :path="'res'" :data="todos" />
            </div>
          </div>
        </div>
        <div class="column is-half">
          <vue-blob-json-csv
            @error="handleError"
            title="Download Photos JSON(confirm dialog)"
            file-type="json"
            file-name="photos"
            :data="photos"
            confirm="Do you really want to download it?"
            class="button is-primary"
          >
          </vue-blob-json-csv>
          <vue-blob-json-csv
            @success="handleSuccess"
            @error="handleError"
            title="Download Photos CSV(success event)"
            file-type="csv"
            file-name="photos"
            :data="photos"
            class="button is-primary"
          >
          </vue-blob-json-csv>
          <div class="column">
            <div>
              <h1 class="title">Photos</h1>
              <vue-json-pretty :path="'res'" :data="photos" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import VueBlobJsonCsv from "./components/VueBlobJsonCsv.vue";
import VueJsonPretty from "vue-json-pretty";

type DataType = {
  isDown: boolean;
  fieldsKey: string[];
  todos: Todos[];
  photos: Photos[];
};

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default Vue.extend({
  components: {
    // VueBlobJsonCsv,
    VueJsonPretty
  },
  data(): DataType {
    return {
      isDown: false,
      fieldsKey: ["id", "title"],
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false
        }
      ],
      photos: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url: "https://via.placeholder.com/600/24f355",
          thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
          albumId: 1,
          id: 4,
          title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          url: "https://via.placeholder.com/600/d32776",
          thumbnailUrl: "https://via.placeholder.com/150/d32776"
        },
        {
          albumId: 1,
          id: 5,
          title: "natus nisi omnis corporis facere molestiae rerum in",
          url: "https://via.placeholder.com/600/f66b97",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97"
        }
      ]
    };
  },
  methods: {
    handleSuccess() {
      alert("Success");
    },
    handleError() {
      alert("Error");
    }
  }
});
</script>

<style>
body {
  height: 2000px;
}
#app {
  padding: 80px 0;
}
.column > span {
  white-space: normal;
  height: auto;
  margin-right: 8px;
  margin-bottom: 10px;
}
.container {
  padding: 20px;
}
.vjs-tree {
  word-break: break-all;
}
.github_ribbon {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
