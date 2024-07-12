import { defineStore } from "pinia";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
// @ts-ignore
import { ref } from 'vue'

export const useFeaturesStore = defineStore('featuresStore', () => {
	const paginationModel = ref<{
		limit: number,
		page: number
	}>({
		limit: 15,
		page: 1
	})

	const {data: features, refresh: refreshFeatures, pending: isLoading} = useAsyncData('fetch:features', () => {
		return dndApi.dictionary.getAllFeatures()
	}, {
		default: () => {
			return {
				count: 0,
				results: []
			}
		}
	})

	return {
		paginationModel,
		features,
		refreshFeatures,
		isLoading
	}
})
