import dndApi from "~/api/dnd-api/index";
import { CommonApi as Api } from "~/types/api/common.api";
import { Classes } from "~/types/classes";

export const classesApi = {
	getAllClasses: async (): Promise<Classes.ClassesApi.GetAllClasses.ResponseDTO | null> => {
		try {
			return await dndApi.common.getAllAvailableResourcesForAnEndpoint(Api.GetAllAvailableResourcesForAnEndpoint.listOfEndpoints.Classes)
		} catch (e) {
			console.log(e)
			return null
		}
	},

	getClassByIndex: async (index: Classes.ClassesApi.GetClassByIndex.RequestDTO): Promise<Classes.ClassesApi.GetClassByIndex.ResponseDTO | null> => {
		try {
			return await $http.$get(`/dnd-api/api/classes/${index}`)
		} catch (e) {
			console.log(e);
			return null
		}
	},

	getAllLevelRecourcesByClass: async (params: Classes.ClassesApi.GetAllLevelResourceByClass.RequestDTO) => {
		try {
			return await $http.$get(`/dnd-api/api/classes/${params.index}/levels`, { query: { subclass: params.query?.subclass } })
		} catch (e) {
			console.log(e);
			return []
		}
	}
}
