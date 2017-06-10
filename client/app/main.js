"use strict";

require("es6-promise/auto");

import Vue from "vue";

import VueMaterial from "vue-material";
Vue.use(VueMaterial);


import App from "./core/App";


new Vue({
	el: "#app",
	components: {
		App
	},
	render: h => h("app")
});

