<template>
	<div>
		<header class="transaction-header" v-bind:class="[isPassed() ? 'passed' : 'failed']" style=" margin-bottom:50px">
			<h1 class="transaction-header__title">{{outcomeText()}}</h1>
			<p class="transaction-header__next-step">{{outcomeAuxText()}}</p>

			<table class="c-transaction-details c-transaction-details--four">
				<tbody>
				<tr class="c-transaction-details__item c-transaction-details__item--first">
					<th class="c-transaction-details__key">Your score</th>
					<td class="c-transaction-details__value">{{scoreText}}</td>
				</tr>

				<tr class="c-transaction-details__item" style="text-align:center">
					<th class="c-transaction-details__key">Outcome</th>
					<td class="c-transaction-details__value">{{statusText()}}</td>
				</tr>

				<tr class="c-transaction-details__item c-transaction-details__item--last">
					<th class="c-transaction-details__key">Questions answered correctly</th>
					<td class="c-transaction-details__value">{{correctlyAnsweredText}}</td>
				</tr>
				</tbody>
			</table>
		</header>

		<div v-if="isPassed()">
			<h2 class="heading-medium">What is next?</h2>
			<div class="text">You need your certification number 21950/2017 when you book and take
				your driving test.</div>

			<div class="message--important">
				Your pass certificate number lasts for 2 years. You must pass your
				driving test in that time, otherwise you’ll have to pass the theory
				test again.
			</div>

			<button class="button">Book your driving test</button>

			<p><router-link to="/intro"><a  href="#" >Back to home</a></router-link></p>
		</div>


	<div v-if="!isPassed()">
		<h2 class="heading-medium">What is next?</h2>
		<div class="text">
			You must book and take the full test again, even if you passed one part this time.
			<br/><br/>
			<details>
				<summary role="button" aria-controls="details-content-0" tabindex="0" aria-expanded="false"><span class="summary">See you performance by topic for this test</span></summary>
				<div class="panel-indent" id="details-content-0" aria-hidden="true" style="display: none;">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem dolor. Fusce et mauris augue. Aenean eu feugiat nibh, nec volutpat metus.</p>
				</div>
			</details>
			<br/>
			<p>You have to wait at least 3 working days before taking your test again.</p>
		</div>
		<p>In the meantime you can <a href="#">take a mock theory test</a>.</p>


		<button class="button">Book your driving test</button>

		<p><router-link to="/intro"><a  href="#" >Back to home</a></router-link></p>
	</div>

		<div v-if="fraudDetected()">
			<div class="message--failure">
				<h3 class="message__heading" style="margin : 0;">Cheat markers detected</h3>

				<p v-if="isMoreThanOneFaceAppeared()">More than one face detected in the camera viewport</p>
				<p v-if="isFaceKeptOffReason()">Face kept off camera viewport for too long</p>
			</div>
		</div>
	</div>


</template>
<script>

	import {mapGetters} from "vuex";

	export default {

		mounted() {

		},

		data() {
			return {};
		},

		computed: {
			durationText: function () {

				let duration = this.$store.getters.testDuration;

				let durationText = "";
				if (duration.minutes > 0) {
					durationText += duration.minutes + " m ";
				}
				if (duration.seconds > 0) {
					durationText += duration.seconds + " s";
				}

				return durationText;
			},
			scoreText: function () {
				return Math.floor(this.$store.getters.correctlyAnsweredCount / this.$store.getters.totalCount * 100) + "%";
			},
			correctlyAnsweredText: function () {
				return this.$store.getters.correctlyAnsweredCount + " out of " +  this.$store.getters.totalCount;
			},
			leftUnansweredText: function () {
				return this.$store.getters.unansweredCount;
			},
			wrongText: function () {
				return (this.$store.getters.totalCount - this.$store.getters.correctlyAnsweredCount - this.$store.getters.unansweredCount);
			},
		},
		methods: {
			isPassed: function () {
				return this.$store.getters.correctlyAnsweredCount === 3;
			},
			statusText: function () {
				return this.isPassed() ? "Pass" : "Fail";
			},
			fraudDetected: function () {
				return this.isFaceKeptOffReason() || this.isMoreThanOneFaceAppeared();
			},
			isFaceKeptOffReason: function () {
				return this.$store.getters.numberOfTimesFaceWasKeptOffCamera > 5;
			},
			isMoreThanOneFaceAppeared: function () {
				return this.$store.getters.numberOfTimesMoreThanOneFaceAppeared > 0;
			},
			outcomeText : function () {
				return this.isPassed() ? 'Theory Test completed' : 'Theory Test failed';
			},
			outcomeAuxText : function () {
			    return this.isPassed() ? 'Your pass certificate number is 21950/2017' : 'You must book and take the full test again';
			}
		}
	};

</script>
<style>

	.cheated {
		background-color: #005ea5;
	}
	.passed {
		background-color: #28a197;
	}

	.failed {
		background-color: darkred;
	}
</style>
