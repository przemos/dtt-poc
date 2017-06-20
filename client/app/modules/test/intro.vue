<template>
	<div>
		<h2 class="heading-large">Test preparation</h2>
		<p>
			To ensure the test session is qualified as valid, please ensure the following:
		</p>
		<ul class="list-bullet">
			<li>your laptop or external camera is correctly installed and switched on</li>
			<li>your face remains in front of the camera within specified window</li>
			<li>avoid changing your head position throughout a test</li>
			<li>when your head position is correct during the test, you will be noticed with <div class="badge--warn"><i class="fa fa-video-camera"></i>&nbsp;Your face is off the camera</div>
			</li>
			<li>when your head position is correct you will see <div class="badge--success"><i class="fa fa-video-camera"></i>&nbsp;&nbsp;Head position correct</div>
			</li>
		</ul>

		<div class="message--important">
			<p>Avoiding suggestions as to your head position may result in failing your test.</p>
		</div>

		<p>
			<router-link to="/calibration"><a class="button" href="#" role="button">Continue</a></router-link>
			<router-link to="/test"><a class="button" href="#" role="button">[DEV] Skip calibration</a></router-link>
		</p>
	</div>

</template>

<script>

</script>
<style>

</style>
