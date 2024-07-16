import { defineStore } from "pinia";
// @ts-ignore
import { useLazyAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
// @ts-ignore
import { reactive, ref, watch } from "vue";
// @ts-ignore
import debounce from 'lodash.debounce'

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

	const search = ref('')
	const challengeRating = ref([])

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

	watch(challengeRating, debounce(() => {
		filterModel.challengeRating = challengeRating.value
	}, 1250))

	return {
		bestiary,
		refreshBestiary,
		isLoading,
		paginationModel,
		filterModel,
		search,
		challengeRating
	}
})
