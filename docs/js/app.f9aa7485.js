(function(t){function e(e){for(var o,n,l=e[0],s=e[1],u=e[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,l=1;l<i.length;l++){var s=i[l];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var o={},a={app:0},r=[];function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=o,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";var o=i("64a9"),a=i.n(o);a.a},"64a9":function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var o=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("Vue Blob JSON or CSV")]),t._m(1),i("nav",{staticClass:"columns"},[i("div",{staticClass:"column is-half"},[i("vue-blob-json-csv",{staticClass:"button is-primary",attrs:{title:"Download Todos JSON","file-type":"json","file-name":"todos",data:t.todos},on:{error:t.handleError}}),i("vue-blob-json-csv",{staticClass:"button is-link",attrs:{title:"Download Todos CSV","file-type":"csv","file-name":"todos",data:t.todos,fields:t.fieldsKey},on:{error:t.handleError}}),i("div",{staticClass:"column"},[i("div",[i("h1",{staticClass:"title"},[t._v("Todos")]),i("vue-json-pretty",{attrs:{path:"res",data:t.todos}})],1)])],1),i("div",{staticClass:"column is-half"},[i("vue-blob-json-csv",{staticClass:"button is-primary",attrs:{title:"Download Photos JSON(confirm dialog)","file-type":"json","file-name":"photos",data:t.photos,confirm:"Do you want to download it?"},on:{error:t.handleError}}),i("vue-blob-json-csv",{staticClass:"button is-primary",attrs:{title:"Download Photos CSV(success event)","file-type":"csv","file-name":"photos",data:t.photos},on:{success:t.handleSuccess,error:t.handleError}}),i("div",{staticClass:"column"},[i("div",[i("h1",{staticClass:"title"},[t._v("Photos")]),i("vue-json-pretty",{attrs:{path:"res",data:t.photos}})],1)])],1)])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"github_ribbon",attrs:{href:"https://github.com/dnrsm/vue-blob-json-csv"}},[i("img",{staticClass:"attachment-full size-full",attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns"},[i("p",{staticClass:"column"},[t._v("Download FILE")])])}],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tagName,{ref:"download",tag:"component",on:{click:function(e){return t.handleDownload()}}},[""===t.title?[t._t("default")]:t._e(),[t._v("\n    "+t._s(t.title)+"\n  ")]],2)},l=[],s=i("7618"),u=(i("ac6a"),i("456d"),o["a"].extend({name:"VueBlobJsonCsv",props:{tagName:{type:String,required:!1,default:"span"},title:{type:String,required:!1,default:""},fileType:{type:String,required:!0,default:""},fileName:{type:String,required:!1,default:""},data:{type:Array,required:!0,default:function(){return[]}},fields:{type:Array,required:!1,default:function(){return[]}},confirm:{type:String,required:!1,default:null}},methods:{handleDownload:function(){var t=null;if(null!==this.confirm){var e=confirm(this.confirm);if(!e)return}if("json"===this.fileType)t=JSON.stringify(this.data);else{if("csv"!==this.fileType)return void this.$emit("error");var i=this.fields.length>0?this.fields:Object.keys(this.data[0]),o="\ufeff".concat(i.join(),"\n");this.data.forEach((function(t){var e=i.map((function(e){return null===t[e]?null:"object"===Object(s["a"])(t[e])?JSON.stringify([t[e]]):[t[e]]})).join(",");o+="".concat(e,"\n")})),t=o}var a=new Blob([t],{type:"application/".concat(this.fileType)}),r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download="".concat(this.fileName,".").concat(this.fileType),r.click(),this.$emit("success")}}})),c=u,d=i("2877"),p=Object(d["a"])(c,n,l,!1,null,null,null),f=p.exports,h=i("d538"),m=i.n(h),v=o["a"].extend({components:{VueBlobJsonCsv:f,VueJsonPretty:m.a},data:function(){return{isDown:!1,fieldsKey:["id","title"],todos:[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}],photos:[{albumId:1,id:1,title:"accusamus beatae ad facilis cum similique qui sunt",url:"https://via.placeholder.com/600/92c952",thumbnailUrl:"https://via.placeholder.com/150/92c952"},{albumId:1,id:2,title:"reprehenderit est deserunt velit ipsam",url:"https://via.placeholder.com/600/771796",thumbnailUrl:"https://via.placeholder.com/150/771796"},{albumId:1,id:3,title:"officia porro iure quia iusto qui ipsa ut modi",url:"https://via.placeholder.com/600/24f355",thumbnailUrl:"https://via.placeholder.com/150/24f355"},{albumId:1,id:4,title:"culpa odio esse rerum omnis laboriosam voluptate repudiandae",url:"https://via.placeholder.com/600/d32776",thumbnailUrl:"https://via.placeholder.com/150/d32776"},{albumId:1,id:5,title:"natus nisi omnis corporis facere molestiae rerum in",url:"https://via.placeholder.com/600/f66b97",thumbnailUrl:"https://via.placeholder.com/150/f66b97"}]}},methods:{handleSuccess:function(){alert("Success")},handleError:function(){alert("Error")}}}),b=v,y=(i("034f"),Object(d["a"])(b,a,r,!1,null,null,null)),g=y.exports,w=i("289d");i("5abe");o["a"].use(w["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.f9aa7485.js.map