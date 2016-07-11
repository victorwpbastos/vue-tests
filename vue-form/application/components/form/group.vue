<template>
	<!-- with cols -->
	<div class="col-sm-{{cols}}" v-if="cols">
		<div class="form-group">
			<label class="control-label" v-if="label" :for="for">{{label}}</label>
			<slot></slot>
		</div>
	</div>

	<!-- without cols -->
	<div class="form-group" v-else>
		<label class="control-label" v-if="label" :for="for">{{label}}</label>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ['label', 'cols', 'for']
	}
</script>

<style scoped>
	label {
		display: block;
	}
</style>