import { CommonApi } from "~/types/api/common.api";
import { Classes } from "~/types/classes";

export namespace Dictionary {
	export namespace DictionaryTypes {
		export type FeaturesItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>
		export type FeaturesResult = {
			count: number,
			results: FeaturesItem[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.ResponseList

		export type Feature = {
			desc?: string[],
			class?: Classes.ClassesTypes.ClassesItem,
			subclass?: Classes.ClassesTypes.ClassesItem,
			parent?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity,
			prerequisites?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity,
			//All features have different specific
			feature_specific?: Record<string, any>
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity
	}

	export namespace DictionaryApi {
		export namespace GetAllFeatures {
			export type ResponseDTO = DictionaryTypes.FeaturesResult
		}

		export namespace GetFeatureByIndex {
			export type RequestDTO = string

			export type ResponseDTO = DictionaryTypes.Feature
		}
	}
}
