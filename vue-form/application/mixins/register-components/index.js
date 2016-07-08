import Vue from 'vue';

export default {
	created() {
		let params = this.registerComponents();
		let ctx = require.context('../../', true, /\.vue$/);
		let vm = this;

		function register(path, prefix) {
			let files = ctx.keys().filter(file => file.indexOf(path) !== -1);

			files.forEach(file => {
				let name = file.substring(file.lastIndexOf('/') + 1).replace('.vue', '');

				vm.$options.components[`${prefix}${name}`] = Vue.extend(ctx(file));
			});
		}

		params.forEach(({ path, prefix}) => register(path, prefix));
	}
}