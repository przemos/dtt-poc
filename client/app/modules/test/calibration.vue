<template>
	<div>
		<header class="content-header">
			<h1>
                            <span class="content-header__type">
                               Theory test
                            </span>

				<span class="content-header__title">
                                Set up your camera
                            </span>

			</h1>
		</header>

		<div class="message--important" >
			<p class=".message__heading">Please make sure that</p>
			<p>
				You are sitting in front of the camera at all times. Moving around
				or standing may risk in failing the test.</p>
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

		<h3 class="heading-small">How will I know my head position is correct?</h3>
		<p>
			Don’t cover your face with sun glasses, don’t wear hat.
		</p>


		<nav class="content-navigation">

			<ul class="list-unstyled content-navigation__split u-clearfix">
				<li class="content-navigation__split--left">
					<button class="button" role="button" v-on:click="goToTest">Start theory test</button>
				</li>
			</ul>

			<ul class="content-navigation__secondary">
				<li>
					<p><router-link to="/intro"><a href="#" >Back</a></router-link></p>
				</li>
			</ul>
		</nav>

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
