<template>
	<!-- content container -->
	<div v-el:content>
		<slot></slot>
	</div>

	<v-group :label="label" :cols="cols">
		<textarea
			v-el:textarea
			:class="['form-control', classes]"
			v-model="model"
			:id="id"
			:name="name"
			:rows="rows"
			:disabled="disabled"
			:readonly="readonly"
		></textarea>
	</v-group>
</template>

<script>
	import VGroup from './group.vue';

	export default {
		components: { VGroup },

		props: ['label', 'cols', 'model', 'id', 'name', 'class', 'rows', 'disabled', 'readonly'],

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