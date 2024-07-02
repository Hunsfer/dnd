import { CommonApi } from "~/types/api/common.api";

export namespace MultiClassing {
	export namespace MultiClassingTypes {
		type Prerequisites = {
			ability_score?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity,
			minimum_score?: number
		}

		export type MultiClassing = {
			prerequisites?: Prerequisites[],
			prerequisite_options?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseOption[],
			proficiencies?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity[],
			proficiency_choices?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseOption[]
		}
	}
}
