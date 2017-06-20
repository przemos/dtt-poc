<template>
	<div>

		<video id="userWebcam" width="320" height="200" preload autoplay loop muted></video>
		<canvas id="userCanvasId" width="320" height="200" ref="userCanvas"></canvas>
	</div>
</template>
<script>
	const FACE_DETECTION_TIMEOUT_MS = 1000;
	const FRAME_INTERVAL_MS = 500;

	export default {

		mounted() {
			let self = this;
			self.initializeTracker(self);
			setInterval(self.analizeFrame, FRAME_INTERVAL_MS);
		},
		props: ["supcio"],
		data() {
			return {
				now: null,
				lastTimeSeen: new Date().getTime(),
				tracker: null
			};
		},
		methods: {
			initializeTracker: function(self) {
				self.tracker = new tracking.ObjectTracker("face");
				self.tracker.setInitialScale(2);
				self.tracker.setStepSize(1);
				self.tracker.setEdgesDensity(0.1);

				tracking.track("#userWebcam", self.tracker, {camera: true});
			},

			analizeFrame: function() {
				let self = this;
				var canvas = document.getElementById("userCanvasId");
				var context = canvas ? canvas.getContext("2d") : null;

				if (context) {
					context.clearRect(0, 0, canvas.width, canvas.height);
				}

				self.tracker.once('track', function(event) {
					var webcamEvent = {};
					webcamEvent.eventTime = new Date().toLocaleString();
					if (event.data.length === 0 || event.data.length > 1) {
						// No objects were detected in this frame.

						if (FACE_DETECTION_TIMEOUT_MS - (new Date().getTime() - self.lastTimeSeen) <= 0) {
							webcamEvent.numberOfFacesFound = event.data.length;

							if (event.data.length === 0) {
								webcamEvent.type = 'NOFACE';
							} else	{
								webcamEvent.type = 'MULTIFACE';
							}
							self.$parent.$emit('webcamEvent', webcamEvent);
							self.lastTimeSeen = new Date().getTime();
						}
					}
					else {
						self.lastTimeSeen = new Date().getTime();

						self.lastTimeSeen = new Date().getTime();
						webcamEvent.type = "OK";

						self.$parent.$emit('webcamEvent', webcamEvent);
					}
				});
			},
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

	.face-detection-warning {
		color: red;
		font-size: 50px;
	}

	#noticeTimer {
		color: red;
		font-size: 50px;
	}

	canvas {
		position: relative;
		left: -400px;
	}
</style>
