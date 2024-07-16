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
	},

	getAllProficiencies: async (): Promise<Dictionary.DictionaryApi.GetAllProficiencies.ResponseDTO | null> => {
		try {
			return dndApi.common.getAllAvailableResourcesForAnEndpoint(CommonApi.GetAllAvailableResourcesForAnEndpoint.listOfEndpoints.Proficiencies)
		} catch (e) {
			return null
		}
	},

	getProficiencyByIndex: async (index: Dictionary.DictionaryApi.GetProficiencyByIndex.RequestDTO): Promise<Dictionary.DictionaryApi.GetFeatureByIndex.ResponseDTO | null> => {
		try {
			return $http.$get(`/dnd-api/api/proficiencies/${index}`)
		} catch (e) {
			return null
		}
	}
}
