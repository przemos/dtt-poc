<template>
	<div>
		<div class="topbar" id="camera-status">
			<div class="grid-row">

				<div class="column-one-third">
					<div v-bind:class="[isInCamera ? '' : 'camera-status-hidden', 'badge--success']"><i
						class="fa fa-video-camera blink"></i>&nbsp;&nbsp;Head position correct
					</div>
					<div v-bind:class="[isInCamera ? 'camera-status-hidden' : '', 'badge--alert fast-blink']"><i
						class="fa fa-video-camera"></i>&nbsp;&nbsp;Your face is off the camera
					</div>
					<span v-if="isMoreThanOneFaceAppeared()" style="float:right">o</span>
				</div>

				<div class="column-one-third">
					<p></p>
				</div>

				<div class="column-one-third">
					<Countdown timespan="300" v-on:action="changeView($event)"></Countdown>
				</div>
			</div>
		</div>
		<div class="grid-row">
			<div v-bind:class="[true ? 'camera-viewport' : '', 'column-one-third ']"
								style="min-width:300px; padding-right:10px">
				<Webcam style="margin-top:40px"/>
			</div>
			<div class="column-two-thirds">
				<question v-if="totalCount > 0 && mode == 'question' " v-on:action="changeView($event)"></question>
				<review v-if="mode == 'review' " v-on:action="changeView($event)"></review>
			</div>
		</div>
	</div>
</template>
<script>

	import Countdown from "../../components/Countdown.vue";
	import Webcam from "../../components/Webcam.vue";

	import Review from "./review.vue";
	import Question from "./question.vue";
	import * as TestStoreOps from "../teststore/types";
	import axios from "axios";
	import {mapGetters} from 'vuex'

	export default {

		mounted() {

			var self = this;

			this.$store.commit(TestStoreOps.TEST_STARTED);
			axios.get("/questions")
				.then(response => {
					// TODO - should be actions
					this.$store.commit(TestStoreOps.LOAD_QUESTIONS, response.data.questions);

					$("#camera-status").stick_in_parent();

					this.$on('webcamEvent', function (value) {
						this.$store.commit(TestStoreOps.LOAD_WEBCAM_EVENT, value);
						if (value.type === "OK") {
							self.isInCamera = true;
						} else if (value.type === 'NOFACE') {
							self.isInCamera = false;
						}
					});
				})
				.catch(e => {
					console.error('Error', e);
				});
		},
		data: function () {
			return {
				mode: "question",
				isInCamera: true
			};
		},
		computed: {
			...mapGetters(['totalCount'])
		},
		components: {Countdown, "question": Question, "review": Review, Webcam},
		methods: {

			isCamera: function () {
				return this.mode === "question";
			},
			isMoreThanOneFaceAppeared: function () {
				return this.$store.getters.numberOfTimesMoreThanOneFaceAppeared > 0;
			},
			changeView: function (target) {

				if (target === "review") {
					this.mode = "review";
				} else if (target === "question") {
					this.mode = "question";
				} else if (target === "timeout" || target === "endtest") {
					this.$store.commit(TestStoreOps.TEST_ENDED);
					this.$router.push('/result');
				} else if ( target === "cancel") {
					this.$router.push('/calibration');
				}
			}
		}
	};
</script>

<style>


	.camera-status-hidden {
		display: none;
	}

	.topbar {
		display: block;
		padding-top: 10px;
		z-index: 999;
		background-color: white;
	}

	.blink {
		animation: blinker 3s cubic-bezier(.5, 0, 1, 1.5) infinite alternate;
	}

	.camera-viewport {
		visibility: hidden;
		position: absolute;
	}

	.hide-camera-viewport {
		visibility: hidden;
		position: absolute;
	}

	@media (min-width: 600px) {
		.camera-viewport {
			visibility: visible;
			display: block;
			position: relative;

		}
	}

	.fast-blink {
		animation: blinker 0.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;
	}

	@keyframes blinker {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
