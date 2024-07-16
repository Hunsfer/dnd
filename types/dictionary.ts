import { Feature } from "~/types/feature";
import { Proficiency } from "~/types/proficiency";

export namespace Dictionary {
	export namespace DictionaryApi {
		export namespace GetAllFeatures {
			export type ResponseDTO =  Feature.FeatureTypes.FeaturesResult
		}

		export namespace GetFeatureByIndex {
			export type RequestDTO = string

			export type ResponseDTO = Feature.FeatureTypes.Feature
		}

		export namespace GetAllProficiencies {
			export type ResponseDTO = Proficiency.ProficiencyTypes.ProficienciesResult
		}

		export namespace GetProficiencyByIndex {
			export type RequestDTO = string

			export type ResponseDTO = Proficiency.ProficiencyTypes.Proficiency
		}
	}
}
