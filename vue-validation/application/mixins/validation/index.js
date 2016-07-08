import Vue from 'vue';

let rulesContext = require.context('./rules', true, /\.js$/);
let rules = {};
let fieldsToValidate = [];

rulesContext.keys().forEach((rule) => {
	let name = /.\/(.*).js/.exec(rule)[1];

	rules[name] = rulesContext(rule).default ? rulesContext(rule).default : rulesContext(rule);
});

function removeError (field) {
	$(field)
		.parents('.form-group')
		.removeClass('has-error')
		.find('.error-message')
		.remove();
}

function addError (field, message) {
	$(field)
		.parents('.form-group')
		.addClass('has-error')
		.append('<div class="text-danger error-message" style="white-space:nowrap;">' + message + '</div>');
}

Vue.directive('validate', {
	bind() {
		$.extend(rules, this.vm.$options.rules);

		fieldsToValidate.push(this.el);
	},

	update(validationRules) {
		let validationHandler = () => {
			removeError(this.el);

			validationRules.every(([rule, ...args]) => {
				let msg = rules[rule]($(this.el), ...args);

				if (msg) {
					addError(this.el, msg);
					return false;
				}

				return true;
			});
		};

		$(this.el).on('input', validationHandler);
	},

	unbind() {
		$(this.el).off('input', validationHandler);
	}
});

export default {
	created() {
		console.log('mixin created');

		// this.$watch('$data', function() {
		// 	this.validate()
		// }, { deep: true });
	},

	methods: {
		validate() {
			fieldsToValidate.forEach((element) => {
				$(element).trigger('input');
			});
		}
	}
};









// import Vue from 'vue';
// import $ from 'jquery';

// let rulesContext = require.context('./rules', true, /\.js$/);
// let rules = [];

// rulesContext.keys().forEach((rule) => {
// 	let name = /.\/(.*).js/.exec(rule)[1];
// 	rules[name] = rulesContext(rule).default ? rulesContext(rule).default : rulesContext(rule);
// });

// function removeErrorMessage (field) {
// 	$(field)
// 		.parents('.form-group')
// 		.removeClass('has-error')
// 		.find('.text-danger')
// 		.remove();
// }

// function addErrorMessage (field, message) {
// 	$(field)
// 		.parents('.form-group')
// 		.addClass('has-error')
// 		.append('<div class="text-danger" style="white-space:nowrap;">' + message + '</div>');
// }

// Vue.directive('validate', {
// 	update({ condition, message, rule }) {
// 		if (condition === undefined && rule === undefined) {
// 			throw Error('Condition or Rule should be informed!');
// 		}

// 		if (rule !== undefined) {
// 			if (typeof rule !== 'string') {
// 				throw Error('Rule should be string!');
// 			}

// 			this.el.addEventListener('input', () => {
// 				removeErrorMessage(this.el);

// 				let error = rules[rule](this.el, message);

// 				if (error) {
// 					addErrorMessage(this.el, error);
// 				}
// 			});
// 		} else {
// 			if (condition !== undefined) {
// 				removeErrorMessage(this.el);

// 				console.log(message);

// 				if (condition !== undefined && condition === false) {
// 					addErrorMessage(this.el, message);
// 				}
// 			}
// 		}
// 	},

// 	unbind() {
// 		console.log('called unbind');
// 		this.el.removeEventListener('input', this.handler);
// 	}
// })

// // Vue.directive('validate', function({ condition, message = 'Preenchimento obrigatório', rule }) {
// // 	if (condition === undefined && rule === undefined) {
// // 		throw Error('Condition or Rule should be informed!');
// // 	}

// // 	if (rule && typeof rule !== 'string') {
// // 		throw Error('Rule should be string!');
// // 	}

// // 	// let field = this.el;

// // 	// removeErrorMessage(this.el);

// // 	// if (condition !== undefined && condition) {
// // 	// 	addErrorMessage(this.el, message);
// // 	// }
// // });