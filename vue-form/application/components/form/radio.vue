<template>
	<div>
		<label :class="['radio-inline', disabled ? 'disabled' : '']" v-if="inline">
			<input
				type="radio"
				:value="value"
				v-model="model"
				:id="id"
				:name="name"
				:disabled="disabled"
			> <slot></slot>
		</label>

		<div :class="['radio-inline', disabled ? 'disabled' : '']" v-else>
			<label>
				<input
					type="radio"
					:value="value"
					v-model="model"
					:id="id"
					:name="name"
					:disabled="disabled"
				> <slot></slot>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: { default: null },
			model: { default: null },
			id: { default() { return `field-${this._uid}`; } },
			name: { default() { return `field-${this._uid}`; } },
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
	.radio-inline {
		margin-top: 7px;
	}
</style>