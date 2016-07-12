<template>
	<div>
		<!-- with cols -->
		<div :class="classes" v-if="cols">
			<div class="form-group">
				<label class="control-label" v-if="label" :for="id">{{label}}</label>
				<slot></slot>
			</div>
		</div>

		<!-- without cols -->
		<div class="form-group" v-else>
			<label class="control-label" v-if="label" :for="id">{{label}}</label>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['label', 'cols', 'id'],

		computed: {
			classes() {
				return `col-sm-${this.cols}`;
			}
		}
	}
</script>

<style scoped>
	label {
		display: block;
	}
</style>