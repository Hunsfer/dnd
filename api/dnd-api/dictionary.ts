import dndApi from "~/api/dnd-api/index";
import { CommonApi } from "~/types/api/common.api";
import { Dictionary } from "~/types/dictionary";

export const dictionaryApi = {
	getAllFeatures: async (): Promise<Dictionary.DictionaryApi.GetAllFeatures.ResponseDTO | null> => {
		try {
			return dndApi.common.getAllAvailableResourcesForAnEndpoint(CommonApi.GetAllAvailableResourcesForAnEndpoint.listOfEndpoints.Features)
		} catch (e) {
			return null
		}
	},

	getFeatureByIndex: async (index: Dictionary.DictionaryApi.GetFeatureByIndex.RequestDTO): Promise<Dictionary.DictionaryApi.GetFeatureByIndex.ResponseDTO | null> => {
		try {
			console.log(index);
			return $http.$get(`/dnd-api/api/features/${index}`)
		} catch (e) {
			return null
		}
	}
}
