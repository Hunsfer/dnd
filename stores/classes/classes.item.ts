import { defineStore } from "pinia";
import { Classes } from "~/types/classes";
// @ts-ignore
import { useAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";

export const useClassesItemStore = (index: Classes.ClassesTypes.ClassIndex) => defineStore(`classesItem:${index}`, () => {
	const { data: classItem, refresh: refreshClass, pending: isLoading } = useAsyncData(`fetchClassItem:${index}`, () => {
		const data = dndApi.classes.getClassByIndex(index)
		if (data) {
			return data
		} else {
			return {}
		}
	}, {
		default: () => {
			return {
				name: ''
			}
		}
	})

	return {
		classItem,
		refreshClass,
		isLoading
	}
})()
