<template>
	<div>
		<h2 class="heading-large">Camera calibration</h2>

		<div class="message--important" >
			<p>Please adjust yourself in front of your camera and click "Continue".</p>
		</div>

	<div class="topbar" id="camera-status">
		<div class="grid-row">

			<div class="column-one-third">
				<div v-bind:class="[isInCamera ? '' : 'camera-status-hidden', 'badge--success']"><i
					class="fa fa-video-camera blink"></i>&nbsp;&nbsp;Head position correct
				</div>
				<div v-bind:class="[isInCamera ? 'camera-status-hidden' : '', 'badge--alert fast-blink']"><i
					class="fa fa-video-camera"></i>&nbsp;&nbsp;Your face is off the camera
				</div>

			</div>
		</div>
	</div>
		<div >
			<Webcam />
		</div>

		<div style="padding-top:15px;width:320px">
			<p>
				<button class="button" role="button" v-on:click="goToTest">Continue</button>
			</p>
		</div>

	</div>
</template>

<script>
	import Webcam from "../../components/Webcam.vue";

	export default {

		mounted() {
			var self = this;
			var calibrationProgressBar = $("#calibrationProgressBar");

			this.$on('webcamEvent', function (value) {
				//console.log(value);

				/*if(!self.calibrationDone) {
					if (value.type === "OK") {
					self.currentProgress += 10;
					calibrationProgressBar.css("width", self.currentProgress+"%");

					} else if (value.type === 'NOFACE') {
					self.currentProgress = 0;
					calibrationProgressBar.css("width", self.currentProgress+"%");
					}

					if(self.currentProgress >= 100) {
					self.calibrationDone = true;
					calibrationProgressBar.removeClass("active");
					}
					}*/

				if (value.type === "OK") {
					self.isInCamera = true;
				} else if (value.type === 'NOFACE') {
					self.isInCamera = false;
				}

			});

		},
		data: function () {
			return {
				isInCamera: true,
				currentProgress: 0,
				calibrationDone: false
			};
		},
		computed: {

		},
		components: { Webcam },
		methods: {
			goToTest: function (event) {
				this.$router.push('test');
			}
		}
	};

</script>
<style>

	.camera-status-hidden {
		display: none;
	}

	.topbar {
		display: block;
		padding-top: 10px;
		z-index: 999;
		background-color: white;
	}

	.blink {
		animation: blinker 3s cubic-bezier(.5, 0, 1, 1.5) infinite alternate;
	}

	.fast-blink {
		animation: blinker 0.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;
	}

	@keyframes blinker {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
