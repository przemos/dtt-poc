<template>
	<div>
		<video id="userWebcam" width="400" height="300" preload autoplay loop muted></video>
		<canvas id="userCanvasId" width="400" height="300" ref="userCanvas"></canvas>
		<h1 class="face-detection-warning animated shake" v-if="!faceFound">NO FACE DETECTED</h1>
		<h1 class="face-detection-warning" v-if="multipleFacesFound">FOUND MULTIPLE FACES</h1>
		<h1 id="noticeTimer"></h1>
	</div>
</template>
<script>
 import {css} from "animate.css/animate.css";

	import * as tracking from 'exports-loader?tracking!tracking';
	import {face} from "tracking/build/data/face";

	const WARNING_THRESHOLD_MS = 1500;
	const FACE_DETECTION_TIMEOUT_MS = 6000;

	export default {

		mounted() {
			var self = this;
			var canvas = self.$refs["userCanvas"];
			var context = canvas.getContext("2d");

			var noticeTimer = document.getElementById("noticeTimer");

			var tracker = new tracking.ObjectTracker("face");
			tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

			tracking.track("#userWebcam", tracker, {camera: true});

			tracker.on('track', function(event) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				if (event.data.length === 0) {
			    // No objects were detected in this frame.

					if (self.lastTimeSeen + WARNING_THRESHOLD_MS < new Date().getTime()) {
						self.faceFound = false;
						self.multipleFacesFound = false;

						noticeTimer.innerHTML = `TIME REMAINING ${Math.round(((FACE_DETECTION_TIMEOUT_MS + WARNING_THRESHOLD_MS - (new Date().getTime() - self.lastTimeSeen)) / 1000))}S`;

						if (FACE_DETECTION_TIMEOUT_MS + WARNING_THRESHOLD_MS - (new Date().getTime() - self.lastTimeSeen) <= 0) {
							self.$parent.$emit('potentialFraudFound', 'potentialFraudFound');
							self.lastTimeSeen = new Date().getTime();
						}						
					}
			  } else {
					self.faceFound = true;
					self.multipleFacesFound = event.data.length > 1;
					self.lastTimeSeen = new Date().getTime();

					noticeTimer.innerHTML = '';

			    event.data.forEach(function(rect) {
			      // rect.x, rect.y, rect.height, rect.width
						context.strokeStyle = '#a64ceb';
	          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
	          context.font = '11px Helvetica';
	          context.fillStyle = "#fff";
	          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
	          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
		    });
			  }
			});
		},
		props: ["supcio"],
		data() {
			return {
				now: null,
				faceFound: true,
				multipleFacesFound: false,
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
