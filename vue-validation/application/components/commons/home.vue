<template>
	<div class="well">
		<div class="row">
			<!-- <div class="col-sm-4">
				<div class="form-group">
					<label class="control-label">Nome</label>
					<input type="text" class="form-control" v-model="nome" v-validate="[ ['required', 'Preechimento obrigatório'], ['equals', 'chunda'] ]">
				</div>
			</div>
			<div class="col-sm-4">
				<div class="form-group">
					<label class="control-label">Idade</label>
					<input type="number" class="form-control" v-model="idade" v-validate="[ ['required', 'Preechimento obrigatório'], ['equals', '30', 'tem que ter 30 anos'] ]">
				</div>
			</div>
			<div class="col-sm-4">
				<div class="form-group">
					<label class="control-label">Sexo</label>
					<select class="form-control" v-model="sexo" v-validate="[ ['required', 'Preechimento obrigatório'] ]">
						<option value="">-- escolha --</option>
						<option value="F">Feminino</option>
						<option value="M">Masculino</option>
					</select>
				</div>
			</div> -->
		</div>

		<div class="row">
			<div class="col-sm-4">
				<div class="form-group">
					<label class="control-label">Nome</label>
					<input type="text" class="form-control" v-model="nome" v-validate="[ ['required', 'Preechimento obrigatório'], ['equals', 'chunda'] ]">
				</div>
			</div>
			<!-- <div class="col-sm-4">
				<div class="form-group">
					<label class="control-label">Fruta preferida</label>
					<br>
					<label class="checkbox-inline">
						<input type="checkbox" v-model="frutas" name="frutas" value="laranja"> Laranja
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" v-model="frutas" name="frutas" value="maçã"> Maçã
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" v-model="frutas" name="frutas" value="banana" v-validate="[ ['required', 'Preechimento obrigatório'], ['minlength', 2, 'Ao menos duas frutas precisam ser informadas'] ]"> Banana
					</label>
				</div>
			</div> -->
		</div>

		<button type="button" class="btn btn-primary" @click="validate">Validar</button>
	</div>
</template>

<script>
	import ValidationMixin from 'mixins/validation';

	export default {
		mixins: [ValidationMixin],

		rules: {
			equals(field, value, message = `Value must be equals to ${value}`) {
				if (field.val() !== value) {
					return message;
				}
			},

			minlength(field, min, message) {
				let checkeds = $(`[name="${field.attr('name')}"]:checked`).length;

				if (checkeds < min) {
					return message;
				}
			}
		},

		data() {
			return {
				nome: 'hehe',
				idade: '',
				sexo: '',
				frutas: ['laranja']
			}
		},

		ready() {
			// this.validate();

			// setTimeout(() => {
			// 	this.sexo = 'F';
			// }, 3000);
		}
	}
</script>