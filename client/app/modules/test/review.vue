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
			<input class="button" type="button" value="Review All" v-on:click="showQuestions()">
			<input class="button" type="button" value="End" v-on:click="endTest()">
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
			endTest : function () {
				this.$store.commit(TestStoreOps.TEST_ENDED);
				this.$router.push('/result')
			}
		}
	};

</script>
<style>

</style>
