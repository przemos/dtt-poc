import * as TestStoreOps from "./types";
import getters from "./getters";

const state = {
	currentIndex: 0,
	correctAnswer : null,
	questions: [],
	timeStarted: null,
	timeEnded: null
}
;

const mutations = {

	[TestStoreOps.GO_NEXT] (state) {
		state.currentIndex++;
	},

	[TestStoreOps.GO_PREV] (state) {
		state.currentIndex--;
	},

	[TestStoreOps.ANSWER] (state, answer) {
		state.questions[state.currentIndex].answer = answer;
	},

	[TestStoreOps.GO_FIRST] (state) {
		state.currentIndex = 0;
	},

	[TestStoreOps.TEST_STARTED] (state) {
		state.timeStarted = new Date();
	},
	[TestStoreOps.TEST_ENDED] (state) {
		state.timeEnded = new Date();
	},

	[TestStoreOps.LOAD_QUESTIONS] (state, questions) {
		state.questions = [];

		questions.forEach(q => {
			state.currentIndex = 0;
			q.answer = null;
			state.questions.push(q);
		});
	}
};


export default {
	namespaced: true,
	state,
	getters,
	mutations
};
