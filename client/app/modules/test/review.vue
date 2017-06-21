<template>
	<div>
		<h1 class="heading-large">Review your test</h1>
		<table>
			<caption class="heading-small">Summary</caption>
			<tbody>
			<tr>
				<td>Total number of questions</td>
				<td>{{totalCount}}</td>
			</tr>
			<tr>
				<td>Number of complete questions</td>
				<td>{{answeredCount}}</td>
			</tr>
			<tr>
				<td>Number of incomplete questions</td>
				<td>{{unansweredCount}}</td>
			</tr>
			</tbody>
		</table>
		<div style="margin-top:20px">
			<input class="button" type="button" value="Finish and see the results" v-on:click="endTest()">
			<p>				<a href="#"  v-on:click="showQuestions()">Back</a></p>

		</div>

	</div>

</template>

<script>

	import {mapGetters} from 'vuex'
	import * as TestStoreOps from '../teststore/types';

	export default {

		computed: {
			...mapGetters([
				"totalCount", "unansweredCount", "answeredCount"
			])
		},
		methods: {
			showQuestions: function () {
				this.$emit('action', 'question');
			},
			endTest: function () {
				this.$emit('action', 'endtest');
			}
		}
	};

</script>
<style>

</style>
