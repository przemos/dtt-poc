<template>
	<div>
		<h1 class="heading-large">Question {{currentIndex + 1}} of {{totalCount}}</h1>
		<h2 class="heading-medium">{{current.text}}</h2>
		<form id="questionForm">
			<div class="form-group">
				<fieldset>
					<legend class="visually-hidden">{{current.text}}</legend>
					<div class="multiple-choice" v-for="(item, index) in current.answers">
						<input :id="radioLabel(index)" type="radio" v-model="answer"
													name="radio-group" :value="index" v-on:change="changeSelection()">
						<label :for="radioLabel(index)">{{item.text}}</label>
					</div>

				</fieldset>
			</div>
			<div class="navigation-buttons">
				<input class="button" type="button" value="Previous" v-if="!prevDisabled()" v-on:click="prev()">
				<input class="button" type="button" value="Review" style="background-color:dodgerblue" v-on:click="review()">

				<input class="button button-right" type="button" :disabled="nextDisabled()"
											v-on:click="next()" value="Next" v-if="!isLast">
			</div>
		</form>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import * as TestStoreOps from '../teststore/types';

	export default {

		data: function () {
			return {
				answer: ''
			};
		},
		computed: {
			...mapGetters([
				"totalCount",
				"current",
				"currentIndex",
				"currentAnswer",
				"isLast",
				"allAnswered"
			]),
		},

		mounted: function () {
			this.answer = this.$store.getters.currentAnswer
		},
		methods: {

			radioLabel: function (id) {
				return "radio-" + id;
			},

			nextDisabled: function () {
				return this.answer === null || this.$store.getters.isLast;
			},

			prevDisabled: function () {
				return this.$store.getters.isFirst;
			},

			prev: function () {
				this.$store.commit(TestStoreOps.GO_PREV);
				this.answer = this.$store.getters.currentAnswer;

			},

			next: function () {
				this.$store.commit(TestStoreOps.GO_NEXT);
				this.answer = this.$store.getters.currentAnswer;
			},

			review: function () {
				this.$emit('action', 'review')
			},

			changeSelection: function () {
				this.$store.commit(TestStoreOps.ANSWER, this.answer);
			}
		}
	};

</script>
<style>

	.button-right {
		margin-right: 0;
		float: right
	}
</style>
