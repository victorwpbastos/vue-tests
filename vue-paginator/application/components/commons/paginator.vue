<template>
	<div class="row">
		<div class="col-sm-4">
			<select class="form-control" v-model="perPage" @change="changeItemsPerPage">
				<option v-for="p in itemsPerPage" track-by="$index" value="{{p}}">SHOWING {{p}} ITEMS PER PAGE</option>
			</select>
		</div>
		<div class="col-sm-4">
			<div class="text-center" style="margin-top:7px;">Page {{currentPage}} of {{totalPages}}</div>
		</div>
		<div class="col-sm-4 text-right">
			<div class="btn-group">
				<button type="button" class="btn btn-default" @click="prev" :disabled="currentPage === 1">Prev</button>
				<button type="button" class="btn btn-default" @click="next" :disabled="currentPage === totalPages">Next</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			currentPage: {
				default: 1
			},

			totalPages: {
				default: 1
			},

			itemsPerPage: {
				default() {
					return [10, 20, 50, 100];
				}
			}
		},

		data() {
			return {
				perPage: 10
			}
		},

		methods: {
			prev() {
				this.currentPage--;
				this.$parent.$emit('paginate', { currentPage: this.currentPage });
			},

			next() {
				this.currentPage++;
				this.$parent.$emit('paginate', { currentPage: this.currentPage });
			},

			changeItemsPerPage() {
				console.log('called');
				this.$parent.$emit('paginate', { currentPage: this.currentPage, itemsPerPage: this.perPage });
			}
		}
	}
</script>