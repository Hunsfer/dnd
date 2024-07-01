import { CommonApi as Api } from '~/types/api/common.api'
import { GetAllAvailableResourcesForAnEndpoint } from "~/dnd/types/api/common.api";

export const commonApi = {
	getAllResourceUrls: async (): Promise<Api.GetAllResourceUrls.ResponseDTO | null> => {
		try {
			return await $http.$get('dnd-api/api')
		} catch (e) {
			console.log(e)
			return null
		}
	},

	getAllAvailableResourcesForAnEndpoint: async (endpoint: Api.GetAllAvailableResourcesForAnEndpoint.RequestDTO): Promise<Api.GetAllAvailableResourcesForAnEndpoint.ResponseDTO | null> => {
		try {
			return await $http.$get(`dnd-api/api/${endpoint}`)
		} catch (e) {
			console.log(e)
			return null
		}
	}
}
