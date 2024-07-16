import { CommonApi } from "~/types/api/common.api";

export namespace Bestiary {
	export namespace BestiaryTypes {
		type BestiaryItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>

		export type BestiaryList = {
			count: number,
			results: BestiaryItem[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.ResponseList
	}

	export namespace BestiaryApi {
		export namespace getBestiary {
			export type RequestDTO = Partial<{
				challengeRating: number[]
			}>

			export type ResponseDTO = BestiaryTypes.BestiaryList
		}
	}
}
