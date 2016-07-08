<template>
	<div class="panel panel-default">
		<table class="table table-bordered">
			<thead style="background:#f5f5f5;">
				<tr>
					<th class="text-center">CPL</th>
					<th class="text-center">EDITAL</th>
					<th class="text-center">OBJETO</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="p in publicacoes">
					<td class="text-center">{{p.codigoProcesso}}</td>
					<td class="text-center">{{p.numeroEdital}}</td>
					<td class="text-center">{{p.descricaoObjeto}}</td>
				</tr>
			</tbody>
		</table>
		<div class="panel-footer">
			<v-paginator :current-page="currentPage" :total-pages="totalPages" :items-per-page="[1,2,3,10]"></v-paginator>
		</div>
	</div>
</template>

<script>
	import VPaginator from 'components/commons/paginator';

	export default {
		components: { VPaginator },

		init() {
			let url = 'http://servicos.sorocaba.sp.gov.br/pub/cors/api/publicacao?status=true';

			this.$http.get(url).then(({ data }) => {
				this.currentPage = data.data.currentPage;
				this.totalPages = data.data.pageCount;
				this.publicacoes = data.data.itemList;
			});
		},

		events: {
			paginate(params) {
				console.log(params);
			}
		},

		data() {
			return {
				currentPage: null,
				totalPages: null,
				publicacoes: []
			}
		}
	}
</script>