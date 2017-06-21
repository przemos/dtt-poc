"use strict";

require("es6-promise/auto");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./core/App.vue";

import Home from "./modules/home";
import Test from "./modules/test";
import Intro from "./modules/test/intro.vue";
import Calibration from "./modules/test/calibration.vue";

import Result from "./modules/result";
import Admin from "./modules/admin";
import store from "./modules/teststore";

Vue.use(Vuex);
Vue.use(VueRouter);


let router = new VueRouter({
	mode: "history",
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	routes: [
		{path: "/", component: Intro},
		{path: "/intro", component: Intro},
		{path: "/calibration", component: Calibration},
		{path: "/test", component: Test},
		{path: "/result", component: Result},
		{path: "/admin", component: Admin}
	]
});




new Vue({
	el: "#app",
	components: {
		App,
		Test
	},
	router,
	store: new Vuex.Store(store),
	render: h => h("app")
});


Vue.filter("two_digits", function (value) {
	if (value.toString().length <= 1)	{
		return "0" + value.toString();
	}
	return value.toString();
});
