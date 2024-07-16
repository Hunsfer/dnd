import { CommonApi } from "~/types/api/common.api";

export namespace Proficiency {
	export namespace ProficiencyTypes {
		type ProficiencyItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>

		export type ProficienciesResult = {
			count: number,
			results: ProficiencyItem[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.ResponseList

		export type Proficiency = {
			type: string,
			classes: Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>[],
			races: Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>[],
			reference: Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>
		} & Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>
	}
}
