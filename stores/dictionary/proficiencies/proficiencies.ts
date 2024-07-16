import { defineStore } from "pinia";
// @ts-ignore
import { useLazyAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
// @ts-ignore
import { ref } from "vue";

export const useProficienciesStore = defineStore('proficienciesStore', () => {
	const paginationModel = ref<{
		limit: number,
		page: number
	}>({
		limit: 15,
		page: 1
	})

	const search = ref('')

	const { data: proficiencies, refresh: refreshProficiencies, pending: isLoading } = useLazyAsyncData('fetch:proficiencies', () => {
		return dndApi.dictionary.getAllProficiencies()
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
		proficiencies,
		refreshProficiencies,
		isLoading,
		search
	}
})
