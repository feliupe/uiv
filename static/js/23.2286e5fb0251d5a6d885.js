webpackJsonp([23],{"T/zk":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("markdown-wrapper",[s("h1",{attrs:{id:"breadcrumbs"}},[this._v("Breadcrumbs "),s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("blockquote",[s("p",[this._v("Indicate the current page's location within a navigational hierarchy.")])]),this._v(" "),s("h2",{attrs:{id:"example"}},[this._v("Example "),s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Use "),s("code",{pre:!0},[this._v("items")]),this._v(" array to create a breadcrumbs nav. "),s("code",{pre:!0},[this._v("active")]),this._v(" state of last element is automatically set if it is undefined.")]),this._v(" "),s("breadcrumbs-example",{ref:"breadcrumbs-example"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumbs")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":items")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"items"')]),this._v("/>")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),s("span",{attrs:{class:"hljs-attr"}},[this._v("items")]),this._v(": [\n          {"),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'Home'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#'")]),this._v("},\n          {"),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'Library'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#'")]),this._v("},\n          {"),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'Data'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#'")]),this._v("}\n        ]\n      }\n    }\n  }\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- breadcrumbs-example.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"breadcrumb-item"}},[this._v("Breadcrumb item "),s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb-item","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("You can also use "),s("code",{pre:!0},[this._v("<breadcrumb-item>")]),this._v(" in breadcrumbs directly. This is useful while full control of item text is need (e.g. HTML tags).")]),this._v(" "),s("p",[this._v("Note that "),s("code",{pre:!0},[this._v("active")]),this._v(" state will not automatically set if using this mode.")]),this._v(" "),s("breadcrumbs-item",{ref:"breadcrumbs-item"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumbs")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"#"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("b")]),this._v(">")]),this._v("Home"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("b")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"#"')]),this._v(">")]),this._v("Library"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("active")]),this._v(">")]),this._v("Data"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumb-item")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumbs")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- breadcrumbs-item.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"router-link"}},[this._v("Router link "),s("a",{staticClass:"header-anchor",attrs:{href:"#router-link","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Parse "),s("code",{pre:!0},[this._v("to")]),this._v(" (String or Object) instead of "),s("code",{pre:!0},[this._v("href")]),this._v(" will create a "),s("code",{pre:!0},[this._v("router-link")]),this._v(" for the breadcrumb item, which you can use with "),s("a",{attrs:{href:"https://router.vuejs.org/"}},[this._v("Vue-Router")]),this._v(".")]),this._v(" "),s("breadcrumbs-router-link",{ref:"breadcrumbs-router-link"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("breadcrumbs")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":items")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"items"')]),this._v("/>")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),s("span",{attrs:{class:"hljs-attr"}},[this._v("items")]),this._v(": [\n          {"),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'Home'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'/'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("exact")]),this._v(": "),s("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v("},\n          {"),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'Breadcrumbs'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'/breadcrumbs'")]),this._v("}\n        ]\n      }\n    }\n  }\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- breadcrumbs-router-link.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h1",{attrs:{id:"api-reference"}},[this._v("API Reference "),s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h2",{attrs:{id:"breadcrumbs-2"}},[s("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/breadcrumbs/Breadcrumbs.js"}},[this._v("Breadcrumbs")]),this._v(" "),s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h3",{attrs:{id:"props"}},[this._v("Props "),s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Type")]),this._v(" "),s("th",[this._v("Default")]),this._v(" "),s("th",[this._v("Required")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("items")])]),this._v(" "),s("td",[this._v("Array")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Breadcrumb items to create. Props defined in each item object is the same with BreadcrumbItem.vue, except "),s("code",{pre:!0},[this._v("text")]),this._v(" will be replace as the breadcrumb item body.")])])])])]),s("h3",{attrs:{id:"slots"}},[this._v("Slots "),s("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("default")])]),this._v(" "),s("td",[this._v("The breadcrumbs body.")])])])])]),s("h2",{attrs:{id:"breadcrumbitem"}},[s("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/breadcrumbs/BreadcrumbItem.js"}},[this._v("BreadcrumbItem")]),this._v(" "),s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbitem","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h3",{attrs:{id:"props-2"}},[this._v("Props "),s("a",{staticClass:"header-anchor",attrs:{href:"#props-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Type")]),this._v(" "),s("th",[this._v("Default")]),this._v(" "),s("th",[this._v("Required")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("active")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Set item to active state.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("href")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("An native link will be created if this prop present.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("target")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Native link prop.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("to")])]),this._v(" "),s("td",[this._v("String or Object")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("An Vue-Router link will be created if this prop present.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("replace")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Vue-Router link prop.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("append")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Vue-Router link prop.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("exact")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Vue-Router link prop.")])])])])]),s("h3",{attrs:{id:"slots-2"}},[this._v("Slots "),s("a",{staticClass:"header-anchor",attrs:{href:"#slots-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("default")])]),this._v(" "),s("td",[this._v("The breadcrumb item body.")])])])])])],1)},staticRenderFns:[]},e=a("VU/8")({components:{"breadcrumbs-example":{template:'<div class="markdown-live-example">\n  <breadcrumbs :items="items"/>\n</div>',data:function(){return{items:[{text:"Home",href:"#"},{text:"Library",href:"#"},{text:"Data",href:"#"}]}}},"breadcrumbs-item":{template:'<div class="markdown-live-example"><breadcrumbs>\n  <breadcrumb-item href="#"><b>Home</b></breadcrumb-item>\n  <breadcrumb-item href="#">Library</breadcrumb-item>\n  <breadcrumb-item active>Data</breadcrumb-item>\n</breadcrumbs>\n\x3c!-- breadcrumbs-item.vue --\x3e</div>'},"breadcrumbs-router-link":{template:'<div class="markdown-live-example">\n  <breadcrumbs :items="items"/>\n</div>',data:function(){return{items:[{text:"Home",to:"/",exact:!0},{text:"Breadcrumbs",to:"/breadcrumbs"}]}}}}},i,!1,null,null,null);s.default=e.exports}});
//# sourceMappingURL=23.2286e5fb0251d5a6d885.js.map