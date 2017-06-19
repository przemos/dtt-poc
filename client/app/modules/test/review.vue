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
			<input class="button" type="button" value="End">
		</div>

	</div>

</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		computed: {
			...mapGetters([
				"totalCount", "unansweredCount", "answeredCount"
			])
		},
		methods: {
			showQuestions: function () {
				this.$emit('action', 'question');
			}
		}
	};

</script>
<style>

</style>
