import { Feature } from "~/types/feature";

export namespace Dictionary {
	export namespace DictionaryApi {
		export namespace GetAllFeatures {
			export type ResponseDTO =  Feature.FeatureTypes.FeaturesResult
		}

		export namespace GetFeatureByIndex {
			export type RequestDTO = string

			export type ResponseDTO = Feature.FeatureTypes.Feature
		}
	}
}
