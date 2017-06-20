<template>
	<div>
		<div class="topbar"  id="camera-status">
			<div class="grid-row">

				<div class="column-one-third">
					<div class="badge--success"><i class="fa fa-video-camera blink"></i>&nbsp;&nbsp;Head position correct</div>
				</div>

				<div class="column-one-third">
					<p></p>
				</div>

				<div class="column-one-third">
					<Countdown timespan="300" style=""></Countdown>

				</div>

			</div>
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
			setTimeout(function (){ $("#camera-status").stick_in_parent();}, 1000);

		},
		data: function () {
			return {
				mode: "question"
			};
		},
		computed: {
			...mapGetters(['totalCount'])
		},
		components: {Countdown, "question": Question, "review": Review},
		methods: {
			changeView: function (target) {

				if (target === "review") {
					this.mode = "review";
				} else {
					this.mode = "question";
				}
			}
		}
	};
</script>

<style>


	.topbar {
		display:block;
		padding-top:10px;
		z-index:999;
		background-color:white;
	}

	.blink {
		animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;
	}

	@keyframes blinker {
		from { opacity: 1; }
		to { opacity: 0; }
	}
</style>
