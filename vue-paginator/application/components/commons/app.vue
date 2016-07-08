<template>
	<v-header></v-header>

	<main class="container">
		<router-view></router-view>
	</main>

	<v-footer></v-footer>
</template>

<script>
	import VHeader from 'components/commons/header.vue';
	import VFooter from 'components/commons/footer.vue';

	export default {
		components: { VHeader, VFooter }
	}
</script>