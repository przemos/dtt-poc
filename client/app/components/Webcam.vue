<template>
	<div>

		<video id="userWebcam" width="400" height="300" preload autoplay loop muted></video>
		<canvas id="userCanvasId" width="400" height="300" ref="userCanvas"></canvas>
		<h1 class="no-face-detected" v-if="!faceFound">NO FACE DETECTED</h1>

	</div>
</template>
<script>
	import * as tracking from 'exports-loader?tracking!tracking';
	import {face} from "tracking/build/data/face";

	export default {

		mounted() {
			var self = this;
			var canvas = self.$refs["userCanvas"];
			var context = canvas.getContext("2d");

			var tracker = new tracking.ObjectTracker("face");
			tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

			tracking.track("#userWebcam", tracker, {camera: true});

			tracker.on('track', function(event) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				if (event.data.length === 0) {
			    // No objects were detected in this frame.
					self.faceFound = false;
			  } else {
					self.faceFound = true;
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
				faceFound: true
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

	.no-face-detected {
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
