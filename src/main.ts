import Vue from "vue";
const ElementUI = require("element-ui");

import { Entry } from "@views/app/app";

require("element-ui/lib/theme-chalk/index.css");

// console.log(Vuex);

// if (process.env.NODE_ENV === "test") {
//     console.info("测试环境,测试版本号", require("../package.json").version, "更新日期", new Date());
// } else if (process.env.NODE_ENV === "production") {
//     console.log = function () { };
// }


Vue.use(ElementUI);

export const app = new Vue({
    el: "#app",
    render: h => h(Entry)
});