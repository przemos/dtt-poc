<template>
	<div>

		<video id="userWebcam" width="400" height="300" preload autoplay loop muted />

	</div>
</template>
<script>
	import * as tracking from 'exports-loader?tracking!tracking';
	import {face} from "tracking/build/data/face";

	export default {
		mounted() {
			console.log(this.supcio);
			var tracker = new tracking.ObjectTracker("face");
			tracking.track("#userWebcam", tracker, {camera: true});
		},
		props: ["supcio"],
		data() {
			return {
				now: null
			};
		},
		computed: {
			seconds() {
				return (this.now !== 0) ? this.now % 60 : 0;
			},
		}
	};
</script>

<style lang="scss">
	.main-content {
		padding: 16px;
	}
</style>
