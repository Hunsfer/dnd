import { Dictionary } from "~/types/dictionary";
import { defineStore } from "pinia";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";

export const useDictionaryItemStore = (index: Dictionary.DictionaryApi.GetFeatureByIndex.RequestDTO) => defineStore(`dictionaryStore:${index}`, () => {
	const {data: feature, refresh: refreshFeature, pending: isLoading} = useAsyncData(`fetch:feature:${index}` , () => {
		return dndApi.dictionary.getFeatureByIndex(index)
	}, {
		default: () => {
			return {
				index: '',
				level: 1,
				name: '',
				url: '',
				desc: [],
				class: {
					index: '',
					name: '',
					url: ''
				},
				prerequisites: [],
			}
		}
	})

	return {
		feature,
		refreshFeature,
		isLoading
	}
})()
