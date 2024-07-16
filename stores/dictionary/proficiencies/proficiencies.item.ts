import { defineStore } from "pinia";
import { Dictionary } from "~/types/dictionary";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";

export const useProficiencyStore = (index: Dictionary.DictionaryApi.GetProficiencyByIndex.RequestDTO) => defineStore(`proficiencyStore:${index}`, () => {
	const { data: proficiency, refresh: refreshProficiency, pending: isLoading } = useAsyncData(`fetch:proficiencyItem${index}`, () => {
		return dndApi.dictionary.getProficiencyByIndex(index)
	}, {
		default: () => {
			return {
				index: '',
				name: ''
			}
		}
	})

	return {
		proficiency,
		refreshProficiency,
		isLoading
	}
})()
