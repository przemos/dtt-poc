<template>
	<div>
		<div style="display:block; margin-right:0; text-align: right; margin-top:10px">
			<Countdown timespan="300"></Countdown>
		</div>
		<question v-if="totalCount > 0 && mode == 'question' " v-on:action="changeView($event)"></question>
		<review v-if="mode == 'review' " v-on:action="changeView($event)"></review>
	</div>
</template>
<script>

	import Countdown from "../../components/Countdown.vue";

	import Review from "./review.vue";
	import Question from "./question.vue";
	import * as TestStoreOps from "../teststore/types";
	import axios from "axios";
	import {mapGetters} from 'vuex'

	export default {

		mounted() {

			this.$store.commit(TestStoreOps.TEST_STARTED);
			axios.get("/questions")
				.then(response => {
					// TODO - should be actions
					this.$store.commit(TestStoreOps.LOAD_QUESTIONS, response.data.questions);
				})
				.catch(e => {
				});
		},
		data: function () {
			return {
				mode: "question"
			};
		},
		computed : {
			...mapGetters(['totalCount'])
		},
		components: {Countdown, "question": Question, "review": Review},
		methods: {
			changeView: function (target) {

				if (target === "review") {
					this.mode = "review";
				} else {
					this.mode = "question";
					this.$store.commit(TestStoreOps.GO_FIRST);
				}
			}
		}
	};


</script>
