import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import Devices from "../components/Devices.vue";
import Assets from "../components/Assets.vue";
import Query from "../components/Query.vue";

Vue.use(VueRouter);

let routes = [
    { path: "/dash", component: Home },
    { path: "/devices", component: Devices },
    { path: "/assets", component: Assets },
    { path: "/query", component: Query },
    // {path: '*', component: NotFoundView}
];

export default new VueRouter({
    mode: "history",
    routes, // short for `routes: routes`
});