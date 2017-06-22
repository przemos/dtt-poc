<template>
	<div>
		<h2 class="heading-large">Take your theory test</h2>
		<div class="text">
			In this test you will be asked 3 questions. You will have 5 minutes to answer.
			You will see the result of the test at the end.
		</div>

		<div class="message">
			<p>To attend, make sure that your camera is switched on</p>
		</div>

		<p>Before you start, you need to set up your camera.</p>


		<p>
			<router-link to="/calibration"><a class="button" href="#" role="button">Continue</a></router-link>
			<!--<router-link to="/test"><a class="button" href="#" role="button">[DEV] Skip calibration</a></router-link>-->
		</p>

		AAA:
		<button v-on:click="add()" value="Send"></button>
	</div>

</template>

<script>
	export default {

	    mounted()  {
					}
	};


</script>
<style>

</style>
