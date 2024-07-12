import { CommonApi } from "~/types/api/common.api";
import { Classes } from "~/types/classes";

export namespace Feature {
	export namespace FeatureTypes {
		type FeaturesItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>

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
}
