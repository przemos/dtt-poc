<template>
	<div>

		<span style="font-weight: bold">Remaining time:</span>
		<span style="display:inline-block;width: 60px;">{{ minutes | two_digits }}:{{ seconds | two_digits}}</span>

	</div>
</template>
<script>
	export default {
		mounted() {
			this.now = this.timespan;
			window.setInterval(() => {
				this.now = (this.now !== 0) ? this.now - 1 : this.now;

				if (this.now === 0) {
					this.$emit("action", "timeout");
				}
			}, 1000);
		},
		props: ["timespan"],
		data() {
			return {
				now: null
			};
		},
		computed: {
			seconds() {
				return (this.now !== 0) ? this.now % 60 : 0;
			},
			minutes() {
				return (this.now !== 0) ? Math.trunc(this.now / 60) % 60 : 0;
			},
		}
	};
</script>

<style lang="scss">
	.main-content {
		padding: 16px;
	}
</style>
