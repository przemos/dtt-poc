<template>
	<div>
		<header class="transaction-header" v-bind:class="[isPassed() ? 'passed' : 'failed']" style=" margin-bottom:50px">
			<h1 class="transaction-header__title">Test complete</h1>
			<p class="transaction-header__next-step">Please review your results</p>

			<table class="c-transaction-details c-transaction-details--four">
				<tbody>
				<tr class="c-transaction-details__item c-transaction-details__item--first">
					<th class="c-transaction-details__key">Person</th>
					<td class="c-transaction-details__value">John Smith</td>
				</tr>

				<tr class="c-transaction-details__item">
					<th class="c-transaction-details__key">Outcome</th>
					<td class="c-transaction-details__value">{{outcomeText()}}</td>
				</tr>

				<tr class="c-transaction-details__item">
					<th class="c-transaction-details__key">Score</th>
					<td class="c-transaction-details__value">{{scoreText}}</td>
				</tr>

				<tr class="c-transaction-details__item c-transaction-details__item--last">
					<th class="c-transaction-details__key">Test duration</th>
					<td class="c-transaction-details__value">{{durationText}}</td>
				</tr>
				</tbody>
			</table>
		</header>
		<div class="grid-row" align="center">
			<div class="column-one-third">
				<div class="data">
					<span class="data-item bold-xxlarge">{{correctlyAnsweredText}}</span>
					<span class="data-item bold-xsmall">Correct answers</span>
				</div>
			</div>
			<div class="column-one-third">
				<div class="data">
					<span class="data-item bold-xxlarge">{{leftUnansweredText}}</span>
					<span class="data-item bold-xsmall">Left unanswered</span>
				</div>
			</div>
			<div class="column-one-third">
				<div class="data">
					<span class="data-item bold-xxlarge">{{wrongText}}</span>
					<span class="data-item bold-xsmall">Wrong answers</span>
				</div>
			</div>
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
				return this.$store.getters.correctlyAnsweredCount;
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
				return this.$store.getters.correctlyAnsweredCount === 3 && !this.fraudDetected();
			},
			outcomeText: function () {
				return this.isPassed() ? "Passed" : "Failed";
			},
			fraudDetected: function () {
				return this.isFaceKeptOffReason() || this.isMoreThanOneFaceAppeared();
			},
			isFaceKeptOffReason: function () {
				return this.$store.getters.numberOfTimesFaceWasKeptOffCamera > 5;
			},
			isMoreThanOneFaceAppeared: function () {
				return this.$store.getters.numberOfTimesMoreThanOneFaceAppeared > 1;
			},
		}
	};

</script>
<style>

	.passed {
		background-color: darkgreen;
	}

	.failed {
		background-color: darkred;
	}
</style>
