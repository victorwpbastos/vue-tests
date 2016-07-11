<template>
	<!-- content container -->
	<div v-el:content>
		<slot></slot>
	</div>

	<v-group :label="label" :cols="cols" :for="id">
		<textarea
			v-el:textarea
			:class="['form-control', classes]"
			v-model="model"
			:id="id"
			:name="name"
			:rows="rows"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
		></textarea>
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
			id: { default() { return `field-${this._uid}`; } },
			name: { default() { return `field-${this._uid}`; } },
			class: { default: null },
			rows: { default: null },
			placeholder: { default: null },
			disabled: { default: null },
			readonly: { default: null }
		},

		computed: {
			classes() {
				return this.class;
			}
		},

		ready() {
			this.setText();
		},

		methods: {
			setText() {
				this.$els.textarea.innerText = this.$els.content.innerText;
				this.$els.content.remove();
			}
		}
	}
</script>