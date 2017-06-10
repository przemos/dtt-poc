<template>
	<div>


				<md-toolbar>
					<h1 class="md-title">Drivers theory test - Registration form</h1>
				</md-toolbar>
			<div class="main-content">
				<form novalidate @submit.stop.prevent="submit">
					<md-input-container>
						<label>Initial value</label>
						<md-input :disabled="disabled" v-model="initialValue"></md-input>
					</md-input-container>

					<md-input-container>
						<label>With label</label>
						<md-input placeholder="My nice placeholder"></md-input>
					</md-input-container>

					<md-input-container md-inline>
						<label>Inline field</label>
						<md-input v-model="value"></md-input>
					</md-input-container>

					<md-input-container>
						<label>Number</label>
						<md-input type="number"></md-input>
					</md-input-container>

					<md-input-container>
						<label>Textarea</label>
						<md-textarea></md-textarea>
					</md-input-container>


					<md-button class="md-raised md-primary" @click.native="register">Register</md-button>
					<md-button class="md-raised md-primary" @click.native="deregister">Deregister</md-button>

				</form>
			</div>

	</div>
</template>
<script>
	export default {

		data()  {
			return {
				counter: 0,
				initialValue: "Initial",
				value: "some-value",
				disabled: false,
				column : true
			};
		},
		methods: {
			register: function () {
				this.counter += 1;
				this.value = "";
				this.disabled = true;
			},
			deregister: function () {
				this.counter -= 1;
				this.disabled = false;
			},

		}
	};

</script>

<style lang="scss">
	.main-content {
		padding: 16px;
	}
</style>
