<template>
	<div>
		<h1 class="heading-large"><span class="heading-secondary">Question {{currentIndex + 1}} of {{totalCount}}</span>{{current.text}}
		</h1>
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

				<input class="button" type="button" :disabled="nextDisabled()"
											v-on:click="next()" value="Continue" v-if="!isLast">
				<input v-bind:class="[!isLast ? 'button-right' : '', 'button']" type="button" value="Review" v-if="isLast"  v-on:click="review()">

				<p>			<a href="#" v-if="!prevDisabled()" v-on:click="prev()">Back</a></p>
				<p>			<a href="#" v-if="prevDisabled()" v-on:click="cancel()">Cancel test</a></p>

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
			},

			cancel : function () {
				this.$emit('action', 'cancel')
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
