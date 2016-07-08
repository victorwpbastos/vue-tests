<template>
	<label :class="['checkbox-inline', disabled ? 'disabled' : '']" v-if="inline">
		<input type="checkbox" value="{{value}}" v-model="model" :disabled="disabled"> <slot></slot>
	</label>

	<div :class="['checkbox', disabled ? 'disabled' : '']" v-else>
		<label>
			<input type="checkbox" value="{{value}}" v-model="model" :disabled="disabled"> <slot></slot>
		</label>
	</div>
</template>

<script>
	export default {
		props: {
			value: { default: null },
			model: { default: true },
			disabled: {
				default: null,
				coerce(value) {
					if (value === 'true' || value === '' || value === 'disabled') { value = true; }

					return value;
				}
			},
			inline: {
				default: false,
				coerce(value) {
					if (value === 'true') { value = true };
					if (value === 'false') { value = false };

					return value;
				}
			}
		}
	}
</script>

<style scoped>
	.checkbox-inline {
		margin-top: 7px;
	}
</style>