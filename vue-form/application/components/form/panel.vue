<template>
	<div class="panel panel-default">
		<div class="panel-heading"><strong>{{title}}</strong></div>
		<div class="panel-body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style scoped>
	.panel-body {
		padding-bottom: 5px;
	}
</style>