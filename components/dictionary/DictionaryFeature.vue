<script setup lang='ts'>
import { useFeaturesStore } from "~/stores/dictionary/features/features";
import { storeToRefs } from "pinia";

const featuresStore = useFeaturesStore()
const { paginationModel, features, isLoading, search } = storeToRefs(featuresStore)

const headers = [
	{
		key: 'name',
		title: 'Name'
	},
	{
		key: 'index',
		title: 'Index',
		sortable: false
	}
]
</script>

<template>
	<v-card>
		<template v-slot:text>
			<v-text-field
				v-model="search"
				label="Search"
				prepend-inner-icon="mdi-magnify"
				variant="outlined"
				hide-details
				single-line
			></v-text-field>
		</template>

		<v-data-table
			v-model:page="paginationModel.page"
			v-model:items-per-page="paginationModel.limit"
			:items="features.results"
			:headers="headers"
			:items-per-page="paginationModel.limit"
			:search="search"
			:loading="isLoading"
		>
			<template v-slot:item.name="{ item }">
				<nuxt-link :to="{ name: 'features-feature', params: { feature: item.index } }" class="text-white">
					{{ item.name }}
				</nuxt-link>
			</template>
		</v-data-table>
	</v-card>
</template>

<style scoped lang='scss'>
</style>
