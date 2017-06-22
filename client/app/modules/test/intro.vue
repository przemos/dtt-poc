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

		<video id="_webcam"></video>
		<p>
			<router-link to="/calibration"><a class="button" href="#" role="button">Continue</a></router-link>
			<!--<router-link to="/test"><a class="button" href="#" role="button">[DEV] Skip calibration</a></router-link>-->
		</p>
		<div id="faces"></div>

	</div>
</template>

<script>


	export default {

		data() {

			return {
				faces: null
			};

		},
		mounted() {

			var self = this;

			function initExample() {

				var webcam = document.getElementById("_webcam");		// our webcam video
				var imageData = document.createElement('canvas');	// image data for BRFv4

				var brfManager = null;
				var resolution = null;
				var brfv4 = null;

				var self = this;
				startCamera();

				function startCamera() {

					// Start video playback once the camera was fetched.
					function onStreamFetched(mediaStream) {

						webcam.srcObject = mediaStream;
						webcam.play();

						// Check whether we know the video dimensions yet, if so, start BRFv4.
						function onStreamDimensionsAvailable() {

							if (webcam.videoWidth === 0) {
								setTimeout(onStreamDimensionsAvailable, 100);
							} else {
								waitForSDK();
							}
						}

						onStreamDimensionsAvailable();
					}

					window.navigator.mediaDevices.getUserMedia({video: {width: 640, height: 480, frameRate: 30}})
						.then(onStreamFetched).catch(function () {
						alert("No camera available.");
					});
				}

				function waitForSDK() {

					if (brfv4 === null) {
						brfv4 = {
							locateFile: function () {
								return "javascripts/BRFv4_JS_trial.js.mem"
							}
						};
						initializeBRF(brfv4);
					}

					if (brfv4.sdkReady) {
						initSDK();
					} else {
						setTimeout(waitForSDK, 100);
					}
				}

				function initSDK() {

					// Resize the canvas to match the webcam video size.
					imageData.width = webcam.videoWidth;
					imageData.height = webcam.videoHeight;

					resolution = new brfv4.Rectangle(0, 0, imageData.width, imageData.height);

					brfManager = new brfv4.BRFManager();
					brfManager.init(resolution, resolution, "com.tastenkunst.brfv4.js.examples.minimal.webcam");

					brfManager.setMode(brfv4.BRFMode.FACE_DETECTION);
					let maxFaceSize = 480;
					brfManager.setFaceDetectionParams(maxFaceSize * .3, maxFaceSize * 1, 12, 8);
					//brfManager.setNumFacesToTrack(2);

					setInterval(trackFaces, 1000 / 5);
				}

				function trackFaces() {

					var imageDataCtx = imageData.getContext("2d");

					//imageDataCtx.setTransform(-1.0, 0, 0, 1, resolution.width, 0); // mirrored for draw of video
					imageDataCtx.drawImage(webcam, 0, 0, resolution.width, resolution.height);
					//imageDataCtx.setTransform(1.0, 0, 0, 1, 0, 0); // unmirrored for draw of results

					brfManager.update(imageDataCtx.getImageData(0, 0, resolution.width, resolution.height).data);

					var faces = brfManager.getFaces();


					console.log(faces.filter(x => x.state === brfv4.BRFState.FACE_TRACKING).length);

					//document.querySelector('#faces').innerHTML = faces.filter(x => x.state === brfv4.BRFState.FACE_TRACKING).length
					document.querySelector('#faces').innerHTML = brfManager.getMergedDetectedFaces().length;
				}
			}

			window.onload = initExample;
		}
	};
</script>

<style>

</style>
