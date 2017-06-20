<template>
	<div>

		<video id="userWebcam" width="320" height="200" preload autoplay loop muted></video>
		<canvas id="userCanvasId" width="320" height="200" ref="userCanvas"></canvas>
	</div>
</template>
<script>
	import * as tracking from 'exports-loader?tracking!tracking';
	import {face} from "tracking/build/data/face";

	const WARNING_THRESHOLD_MS = 1500;
	const FACE_DETECTION_TIMEOUT_MS = 1000;

	export default {

		mounted() {
			var self = this;
			var canvas = self.$refs["userCanvas"];
			var context = canvas.getContext("2d");

			var tracker = new tracking.ObjectTracker("face");
			tracker.setInitialScale(2);
			tracker.setStepSize(1);
			tracker.setEdgesDensity(0.1);

			tracking.track("#userWebcam", tracker, {camera: true});

			tracker.on('track', function (event) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				var webcamEvent = {};
				webcamEvent.eventTime = new Date().toLocaleString();

				if (event.data.length === 0 || event.data.length > 1) {
					// No objects were detected in this frame.

					if (self.lastTimeSeen + WARNING_THRESHOLD_MS < new Date().getTime()) {

						if (FACE_DETECTION_TIMEOUT_MS + WARNING_THRESHOLD_MS - (new Date().getTime() - self.lastTimeSeen) <= 0) {
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
				}
				else {

					self.lastTimeSeen = new Date().getTime();
					webcamEvent.type = "OK";

					self.$parent.$emit('webcamEvent', webcamEvent);

					/*event.data.forEach(function(rect) {
						// rect.x, rect.y, rect.height, rect.width
						context.strokeStyle = '#a64ceb';
						context.strokeRect(rect.x, rect.y, rect.width, rect.height);
						context.font = '11px Helvetica';
						context.fillStyle = "#fff";
						context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
						context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
						});*/
				}
			});
		},
		data() {
			return {
				now: null,
				lastTimeSeen: new Date().getTime()
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

	.face-detection-warning {
		color: red;
		font-size: 50px;
	}

	#noticeTimer {
		color: red;
		font-size: 50px;
	}

	video {
		//position: absolute;
	}

	canvas {
		position: relative;
		left: -400px;
	}
</style>
