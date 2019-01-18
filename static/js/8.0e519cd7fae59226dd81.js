webpackJsonp([8],{vpKQ:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("markdown-wrapper",[t("h1",{attrs:{id:"getting-started"}},[this._v("Getting Started "),t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[t("strong",[this._v("uiv")]),this._v(" is a Bootstrap 3 component lib implemented by Vue 2.")]),this._v(" "),t("ul",[t("li",[t("strong",[this._v("Lightweight")]),this._v(" "),t("ul",[t("li",[this._v("All components "),t("strong",[this._v("~20KB")]),this._v(" Gziped.")]),this._v(" "),t("li",[this._v("Dependencies only "),t("strong",[this._v("Vue & Bootstrap CSS")]),this._v(".")]),this._v(" "),t("li",[this._v("No extra CSS.")]),this._v(" "),t("li",[this._v("Individually import supported.")])])]),this._v(" "),t("li",[this._v("IE 9+ & modern browsers supported.")]),this._v(" "),t("li",[t("strong",[this._v("SSR")]),this._v(" (server-side rendering) supported.")]),this._v(" "),t("li",[this._v("All env supported:\n"),t("ul",[t("li",[this._v("UMD build "),t("code",{pre:!0},[this._v("uiv.min.js")]),this._v(" can be used in all environments (including browser)")]),this._v(" "),t("li",[this._v("ES Module build "),t("code",{pre:!0},[this._v("uiv.esm.js")]),this._v(" is for modern bundlers like "),t("a",{attrs:{href:"https://webpack.js.org"}},[this._v("webpack 2")]),this._v(" or "),t("a",{attrs:{href:"https://rollupjs.org"}},[this._v("rollup")])]),this._v(" "),t("li",[this._v("CommonJS build "),t("code",{pre:!0},[this._v("uiv.common.js")]),this._v(" is for older bundlers like "),t("a",{attrs:{href:"http://browserify.org"}},[this._v("browserify")]),this._v(" or "),t("a",{attrs:{href:"https://webpack.github.io"}},[this._v("webpack 1")]),this._v(".")])])])]),this._v(" "),t("h2",{attrs:{id:"install"}},[this._v("Install "),t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("If you are using module bundlers such as Webpack, you can directly include package into your project via:")]),this._v(" "),t("p",[t("strong",[this._v("NPM")]),this._v(":")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[this._v("$ npm install uiv --save\n")])]),this._v(" "),t("p",[this._v("or "),t("strong",[this._v("Yarn")]),this._v(":")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[this._v("$ yarn add uiv\n")])]),this._v(" "),t("p",[this._v("Then register uiv components and directives all at once in your app's entry:")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[this._v("// main.js")]),this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'bootstrap/dist/css/bootstrap.min.css'")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'vue'")]),this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" * "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("as")]),this._v(" uiv "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("\n\nVue.use(uiv)\n")])]),this._v(" "),t("p",[this._v("That's it. Happy coding!")]),this._v(" "),t("h3",{attrs:{id:"no-conflict"}},[this._v("No conflict "),t("a",{staticClass:"header-anchor",attrs:{href:"#no-conflict","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("All components & directives will be installed with no prefix by default, you can add any prefix to them to avoid conflicts with other libs if needed.")]),this._v(" "),t("p",[this._v("For example:")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[this._v("Vue.use(uiv, {"),t("span",{attrs:{class:"hljs-attr"}},[this._v("prefix")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("})\n")])]),this._v(" "),t("p",[this._v("Results in:")]),this._v(" "),t("ul",[t("li",[this._v("Components such as "),t("code",{pre:!0},[this._v("<alert>")]),this._v(" becomes "),t("code",{pre:!0},[this._v("<uiv-alert>")])]),this._v(" "),t("li",[this._v("Directives such as "),t("code",{pre:!0},[this._v("v-tooltip")]),this._v(" becomes "),t("code",{pre:!0},[this._v("v-uiv-tooltip")])]),this._v(" "),t("li",[this._v("Global methods such as "),t("code",{pre:!0},[this._v("$alert")]),this._v(" becomes "),t("code",{pre:!0},[this._v("$uiv_alert")])])]),this._v(" "),t("h2",{attrs:{id:"import-individually"}},[this._v("Import individually "),t("a",{staticClass:"header-anchor",attrs:{href:"#import-individually","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("If you don't want all of the components for some reason (e.g. to save the bundle size), you can also import them individually.")]),this._v(" "),t("h3",{attrs:{id:"example"}},[this._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { Alert } "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("new")]),this._v(" Vue({\n  "),t("span",{attrs:{class:"hljs-attr"}},[this._v("components")]),this._v(": {\n    Alert\n  }\n})\n")])]),this._v(" "),t("h2",{attrs:{id:"browsers"}},[this._v("Browsers "),t("a",{staticClass:"header-anchor",attrs:{href:"#browsers","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("You can load & install uiv package directly in browsers. For example:")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- Remember to import Vue and Bootstrap CSS file before this! --\x3e")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//unpkg.com/uiv"')]),this._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),this._v(" "),t("p",[this._v("This will simply load the latest version of "),t("code",{pre:!0},[this._v("uiv.min.js")]),this._v(" into your page. For detail usages (e.g. load specify version, IMPORTANT in production mode) and different CDN providers, you can visit:")]),this._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://unpkg.com"}},[this._v("https://unpkg.com")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://www.jsdelivr.com/"}},[this._v("https://www.jsdelivr.com")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://cdnjs.com/libraries/uiv"}},[this._v("https://cdnjs.com/libraries/uiv")])])]),this._v(" "),t("h3",{attrs:{id:"complete-usage-example"}},[this._v("Complete usage example "),t("a",{staticClass:"header-anchor",attrs:{href:"#complete-usage-example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- index.html --\x3e")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("html")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("head")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("link")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rel")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"stylesheet"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"')]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"text/javascript"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//vuejs.org/js/vue.min.js"')]),this._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"text/javascript"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//unpkg.com/uiv/dist/uiv.min.js"')]),this._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("head")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("body")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("id")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"app"')]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("tabs")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("tab")]),this._v(">")]),this._v("Tab content 1."),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("tab")]),this._v(">")]),this._v("Tab content 2."),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("tab")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("tabs")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"actionscript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// No need to install uiv, we already do this for you after script loaded.")]),this._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// Define `window.__uiv_options` before script loaded if you need install options.")]),this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("new")]),this._v(" Vue().$mount("),t("span",{attrs:{class:"hljs-string"}},[this._v("'#app'")]),this._v(")\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("body")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("html")]),this._v(">")]),this._v("\n")])]),this._v(" "),t("p",[this._v("This will create a working "),t("strong",[this._v("Tabs")]),this._v(" component on your page.")]),this._v(" "),t("h2",{attrs:{id:"browser-compatibility"}},[this._v("Browser compatibility "),t("a",{staticClass:"header-anchor",attrs:{href:"#browser-compatibility","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("All browsers supported by "),t("a",{attrs:{href:"https://github.com/vuejs/vue"}},[this._v("Vue 2")]),this._v(" and "),t("a",{attrs:{href:"https://github.com/twbs/bootstrap"}},[this._v("Bootstrap 3 CSS")]),this._v(" are suppose to be also supported by this lib  (IE8 and below are not supported).")])])},staticRenderFns:[]},h=a("VU/8")({components:{}},i,!1,null,null,null);t.default=h.exports}});
//# sourceMappingURL=8.0e519cd7fae59226dd81.js.map