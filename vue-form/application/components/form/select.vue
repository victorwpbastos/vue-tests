<template>
	<!-- content container -->
	<div v-el:content>
		<slot></slot>
	</div>

	<v-group :label="label" :cols="cols">
		<select
			v-el:select
			:class="['form-control', classes]"
			v-model="model"
			:id="id"
			:name="name"
			:multiple="multiple"
			:disabled="disabled"
			:readonly="readonly"
		></select>
	</v-group>
</template>

<script>
	import VGroup from './group.vue';

	export default {
		components: { VGroup },

		props: {
			label: { default: null },
			cols: { default: null },
			model: { default: null },
			id: { default: null },
			name: { default: null },
			class: { default: null },
			disabled: { default: null },
			readonly: { default: null },
			multiple: {
				default: false,
				coerce(value) {
					if (value === 'true') { value = true };
					if (value === 'false') { value = false };

					return value;
				}
			}
		},

		computed: {
			classes() {
				return this.class;
			}
		},

		ready() {
			this.setOptions();
		},

		methods: {
			setOptions() {
				this.$els.select.innerHTML = this.$els.content.innerHTML;
				this.$els.content.remove();
			}
		}
	}
</script>