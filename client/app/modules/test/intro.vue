<template>
	<div>
		<h2 class="heading-large">Take your theory test</h2>
		<div class="text">
			In this test you will be asked 3 questions. You will have 5 minutes to answer.
			You will see the result of the test at the end.
		</div>

		<div class="message">
			<div class="message__heading">This test is supervised</div>
				To take part, make sure that your camera is switched on.
		</div>

		<p>Before you start, you need to set up your camera.</p>

		<br/>
		<p>There are 2 parts to the test</p>
		<ul class="list-bullet">
			<li>multiple-choice questions</li>
			<li>hazard perception - a video test about spotting hazards on the road</li>
		</ul>
		<p>You book and take them as a single test. You must pass both parts to pass the
			test.</p>
		<p>
			<router-link to="/calibration"><a class="button" href="#" role="button">Set up your camera</a></router-link>
			<!--<router-link to="/test"><a class="button" href="#" role="button">[DEV] Skip calibration</a></router-link>-->
		</p>
	</div>

</template>

<script>

</script>
<style>

</style>
