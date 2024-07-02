import { defineStore } from "pinia";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
import { Classes } from "~/types/classes";

export const useClassesStore = defineStore('classesStore', () => {
	const { data: classes, refresh: refreshClasses, pending: isLoading } = useAsyncData('fetch:classes',() => {
		const result = dndApi.classes.getAllClasses()

		if (result) {
			return result
		} else {
			return {
				count: 0,
				results: []
			}
		}
	}, {
		default: (): Classes.ClassesApi.GetAllClasses.ResponseDTO => {
			return {
				count: 0,
				results: []
			} as Classes.ClassesTypes.ClassesResult
		}
	})

	return {
		classes,
		refreshClasses,
		isLoading
	}
})
