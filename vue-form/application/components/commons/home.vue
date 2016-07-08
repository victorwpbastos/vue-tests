<template>
	<!-- <div class="row">
		<div class="col-sm-{{range}}">
			<v-panel title="Dados Pessoais">

				<div class="row">
					<v-select label="Sexo" cols="4" :model.sync="sexo">
						<optgroup label="Sexo">
							<option value="">-- selecione --</option>
							<option value="f">Feminino</option>
							<option value="m">Masculino</option>
						</optgroup>
					</v-select>
					<v-group label="Sexo" cols="4">
						<v-radio inline="true" value="f" :model.sync="sexo">Feminino</v-radio>
						<v-radio inline="true" value="m" :model.sync="sexo">Masculino</v-radio>
					</v-group>
					<v-group label="Frutas" cols="4">
						<v-checkbox inline="true" value="laranja" :model.sync="frutas">Laranja</v-checkbox>
						<v-checkbox inline="true" value="maça" :model.sync="frutas">Maçã</v-checkbox>
						<v-checkbox inline="true" value="abacate" :model.sync="frutas">Abacate</v-checkbox>
					</v-group>
				</div>

				<v-textarea label="Bio" :rows="range">Chunda love</v-textarea>
			</v-panel>
		</div>
	</div> -->
</template>

<script>
	import RegisterComponentsMixin from 'mixins/register-components';

	export default {
		mixins: [ RegisterComponentsMixin ],

		methods: {
			registerComponents() {
				return [
					{ path: 'components/form', prefix: 'v-' }
				]
			}
		},

		data() {
			return {
				nome: 'Chunda Love',
				idade: 31,
				sexo: 'm',
				animal: {
					dog: {
						rusky: 1
					}
				}
			}
		}
	}
</script>


<!-- <template>
	<div class="panel panel-default" v-for="panel in panels">
		<div class="panel-heading">
			<strong>{{ panel.name }}</strong>
		</div>
		<div class="panel-body">
			<div class="row">
				<div v-for="field in fields[$index]" class="col-sm-{{ field.cols }}">
					<div class="form-group" v-if="field.type === 'text'">
						<label>{{ field.label }} {{ this[field.name] }}</label>
						<input type="text" class="form-control" v-model="getModel(field.model)">
					</div>
					<div class="form-group" v-if="field.type === 'select'">
						<label>{{ field.label }}</label>
						<select class="form-control" v-model="this[field.model]">
							<option v-for="option in field.options" :value="option.value">{{ option.text }}</option>
						</select>
					</div>
					<div class="form-group" v-if="field.type === 'checkbox'">
						<label>{{ field.label }}</label>
						<br>
						<label class="checkbox-inline" v-for="option in field.options">
							<input type="checkbox" v-model="this[field.model]" :value="option.value"> {{ option.text }}
						</label>
					</div>
				</div>
			</div>

			<pre>
				{{ $data | json }}
			</pre>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				getModel(path) {
					console.log(path);
					return this.$get(path);
				},

				nome: 'Chunda Love',
				idade: 30,
				sexo: 'F',
				animal: {
					dog: {
						rusky: 1
					}
				},

				panels: [
					{ name: 'Dados Pessoais' }
				],

				fields: [
					[
						{ type: 'text', cols: 6, label: 'Dog', model: 'animal.dog.rusky' },
						{ type: 'text', cols: 8, label: 'Nome', model: 'nome' },
						{ type: 'text', cols: 2, label: 'Idade', model: 'idade' },
						{ type: 'select', cols: 2, label: 'Sexo', model: 'sexo', options: [ { value: 'M', text: 'Masculino' }, { value: 'F', text: 'Feminino' } ] },
						// { type: 'checkbox', cols: 4, label: 'Frutas', model: 'frutas', options: [ { value: {id: 1}, text: 'Laranja' }, { value: {id: 2}, text: 'Maçã' }, { value: {id: 3}, text: 'Pera' } ] }
					]
				]
			}
		}
	}
</script> -->