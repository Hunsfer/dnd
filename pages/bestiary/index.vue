<script setup lang='ts'>
import { useBestiaryStore } from "~/stores/bestiary/bestiary";
import { storeToRefs } from "pinia";
import { challengeRating as items } from "~/helpers/constants";

const bestiaryStore = useBestiaryStore()
const { bestiary, isLoading, paginationModel, search, challengeRating } = storeToRefs(bestiaryStore)

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
	<v-container class="py-8 px-6" fluid>
		<v-card>
			<template v-slot:text>
				<div class="d-flex align-center justify-space-between ga-6">
					<v-text-field
						v-model="search"
						label="Search"
						prepend-inner-icon="mdi-magnify"
						variant="outlined"
						hide-details
						single-line
						class="w-50"
					/>
					<v-select
						v-model="challengeRating"
						:items="items"
						label="Challenge rating"
						item-title="name"
						item-value="value"
						hide-details
						variant="outlined"
						multiple
						class="w-50"
						>
						<template v-slot:selection="{ item, index }">
							<v-chip v-if="index < 5">
								<span>{{ item.title }}</span>
							</v-chip>
							<span
								v-if="index === 5"
								class="text-grey text-caption align-self-center"
							>
								(+{{ challengeRating.length - 5 }} others)
							</span>
						</template>
							<template v-slot:item="{ props, item }">
								<v-list-item v-bind="props" :subtitle="item.raw.value"></v-list-item>
							</template>
						</v-select>
				</div>
			</template>

			<v-data-table
				v-model:page="paginationModel.page"
				v-model:items-per-page="paginationModel.limit"
				:items="bestiary.results"
				:headers="headers"
				:items-per-page="paginationModel.limit"
				:search="search"
				:loading="isLoading"
			>
				<template v-slot:item.name="{ item }">
					<nuxt-link :to="{ name: 'bestiary-monster', params: { monster: item.index } }" class="text-white">
						{{ item.name }}
					</nuxt-link>
				</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
