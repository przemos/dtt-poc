"use strict";

require("es6-promise/auto");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex';

import App from "./core/App.vue";

import Home from "./modules/home";
import Test from "./modules/test";
import Result from "./modules/result";
import Admin from "./modules/admin";
import store from "./modules/teststore";

Vue.use(Vuex);
Vue.use(VueRouter);


let router = new VueRouter({
	mode: "history",
	routes: [
		{path: "/", component: Home},
		{path: "/test", component: Test},
		{path: "/result", component: Result},
		{path: "/admin", component: Admin	}
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
