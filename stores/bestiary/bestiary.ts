import { defineStore } from "pinia";
// @ts-ignore
import { useLazyAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
// @ts-ignore
import { reactive, ref } from "vue";

export const useBestiaryStore = defineStore('bestiaryStore', () => {
	const filterModel = reactive<{
		challengeRating?: number[]
	}>({})

	const paginationModel = ref<{
		limit: number,
		page: number
	}>({
		limit: 15,
		page: 1
	})

	const { data: bestiary, refresh: refreshBestiary, pending: isLoading } = useLazyAsyncData('fetch:bestiary', () => {
		return dndApi.bestiary.getBestiary(filterModel)
	}, {
		default: () => {
			return {
				count: 0,
				result: []
			}
		},
		watch: [filterModel]
	})

	return {
		bestiary,
		refreshBestiary,
		isLoading,
		paginationModel,
		filterModel
	}
})
