<template>
	<div>

		<video id="userWebcam" width="320" height="200" preload autoplay loop muted></video>
		<canvas id="userCanvasId" width="320" height="200" ref="userCanvas" style="visibility:hidden;"></canvas>
	</div>
</template>
<script>
	const FACE_DETECTION_TIMEOUT_MS = 1000;
	const FRAME_INTERVAL_MS = 200;

	export default {

		mounted() {
			let self = this;
			self.myWorker = new Worker("/javascripts/tracking.js");

			self.initializeCamera(self);
			self.initializeTracker(self);

		},
		data() {
			return {
				now: null,
				lastTimeSeen: new Date().getTime(),
				tracker: null,
				video: null
			};
		},
		methods: {
			initializeCamera: function (self) {
				self.video = document.getElementById('userWebcam');

				navigator.getMedia = ( navigator.getUserMedia ||
				navigator.webkitGetUserMedia ||
				navigator.mozGetUserMedia ||
				navigator.msGetUserMedia);

				navigator.getMedia(
					{
						video: true,
						audio: false
					},
					function (stream) {
						if (navigator.mozGetUserMedia) {
							self.video.mozSrcObject = stream;
						} else {
							var vendorURL = window.URL || window.webkitURL;
							self.video.src = vendorURL.createObjectURL(stream);
						}
						self.video.play();
					},
					function (err) {
						console.log("An error occured! " + err);
					});
			},
			initializeTracker: function (self) {


				self.attachOnFrameEventListener();
				setInterval(self.takePhoto, FRAME_INTERVAL_MS);
			},

			takePhoto: function () {
				let self = this;
				let canvas = document.getElementById("userCanvasId");
				if (canvas) {
					canvas.width = self.video.width;
					canvas.height = self.video.height;
				}
				let context = canvas ? canvas.getContext("2d") : null;

				if (context) {
					context.drawImage(self.video, 0, 0, self.video.width, self.video.height);
					let data = context.getImageData(0, 0, self.video.width, self.video.height).data;
					self.myWorker.postMessage({data: data, width: self.video.width, height: self.video.height});
				}
			},

			attachOnFrameEventListener: function () {
				let self = this;

				self.myWorker.onmessage = function (workerMsg) {

					var event = workerMsg.data;
					var webcamEvent = {};
					webcamEvent.eventTime = new Date().toLocaleString();
					if (event.data.length === 0 || event.data.length > 1) {
						// No objects were detected in this frame.

						if (FACE_DETECTION_TIMEOUT_MS - (new Date().getTime() - self.lastTimeSeen) <= 0) {
							webcamEvent.numberOfFacesFound = event.data.length;

							if (event.data.length === 0) {
								webcamEvent.type = 'NOFACE';
							} else {
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
				};
			}
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
		//left: -400px;
	}
</style>
