import { CommonApi as Api } from '~/types/api/common.api'

export const commonApi = {
	getAllResourceUrls: async (): Promise<Api.GetAllResourceUrls.ResponseDTO | null> => {
		try {
			return await $http.$get('dnd-api/api')
		} catch (e) {
			console.log(e)
			return null
		}
	},

	getAllAvailableResourcesForAnEndpoint: async <T extends Api.GetAllAvailableResourcesForAnEndpoint.ResponseDTO>(endpoint: Api.GetAllAvailableResourcesForAnEndpoint.RequestDTO): Promise<T | null> => {
		try {
			return await $http.$get(`dnd-api/api/${endpoint}`)
		} catch (e) {
			console.log(e)
			return null
		}
	}
}
