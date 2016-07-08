<template>
	<v-group :label="label" :cols="cols">
		<input
			:type="type"
			:class="['form-control', classes]"
			v-model="model"
			:id="id"
			:name="name"
			:disabled="disabled"
			:readonly="readonly"
			:placeholder="placeholder"
			:min="min"
			:max="max"
			:step="step"
		>
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
			placeholder: { default: null },
			min: { default: null },
			max: { default: null },
			step: { default: null },
			type: {
				default: 'text',
				validator(value) {
					return value.toLowerCase() !== 'radio' && value.toLowerCase() !== 'checkbox';
				}
			}
		},

		computed: {
			classes() {
				return this.class;
			}
		}
	}
</script>