export default function(router) {
	router.map({
		'/': {
			component: require('components/commons/home.vue')
		},

		'*': {
			component: require('components/commons/notFound.vue')
		}
	});
}