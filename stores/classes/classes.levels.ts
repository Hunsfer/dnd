import { defineStore } from "pinia";
import { Classes } from "~/types/classes";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";

export const useClassesLevels = (index: Classes.ClassesTypes.ClassIndex, subclass?: string) => defineStore(`classLevels:${index}?:${subclass}`, () => {
	const { data: levels, refresh: refreshLevels, pending: isLoading } = useAsyncData(`fetchClassLevels:${index}?:${subclass}`, () => {
		const params: Classes.ClassesApi.GetAllLevelResourceByClass.RequestDTO = {
			index,
		}
		if (subclass) {
			params.query = { subclass }
		}

		return dndApi.classes.getAllLevelRecourcesByClass(params)
	}, {
		default: () => {
			return []
		}
	})

	return {
		levels,
		refreshLevels,
		isLoading
	}
})()
