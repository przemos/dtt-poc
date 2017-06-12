"use strict";


import VueRouter from "vue-router";

import Home from "../modules/home";
import Test from "../modules/test";
import Result from "../modules/result";
import Admin from "../modules/admin";




export default new VueRouter({
	mode: "hash",
	routes: [
		{path: "/", component: Home},
		{path: "/test", component: Test},
		{path: "/result", component: Result},
		{path: "/admin", component: Admin	},


		// { path: "/users", component: User, meta: { needRole: "admin" } },
		//{ path: "*", component: NotFound }
	]
});
