<template>
	<div>
		<h2 class="heading-large">Camera calibration</h2>
		<p>
			Please keep your face in center of camera until the calibration process finished.
		</p>
		<div class="text-center1">
			<Webcam />	
		</div>

		
		<div class="col-md-4" style="padding-top:15px;">
			<div class="progress">
				<div class="progress-bar progress-bar-striped active" style="width: 0%;" id="calibrationProgressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
					
				</div>
			</div>
		</div>
		<br>

		<div class="message--important" >
			<p>You won't be able to process with test until you finish calibration successfuly.</p>
		</div>

		<p>
			<button class="button" role="button" v-bind:disabled="!calibrationDone" v-on:click="goToTest">Continue</button>
		</p>
	</div>

</template>

<script>
	import "!style-loader!css-loader!../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
	import Webcam from "../../components/Webcam.vue";
	
	export default {

		mounted() {
			var self = this;
			var calibrationProgressBar = $("#calibrationProgressBar");

			this.$on('webcamEvent', function (value) {
				console.log(value);

				if(!self.calibrationDone) {				
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

</style>
