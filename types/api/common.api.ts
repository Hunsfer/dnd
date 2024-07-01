export namespace CommonApi {
	export namespace GetAllResourceUrls {
		export type ResponseDTO = Record<string, string>
	}

	export namespace GetAllAvailableResourcesForAnEndpoint {
		export enum listOfEndpoints {
			AbilityScores = 'ability-scores'
		}

		interface ResponseItem {
			index?: string,
			level?: number,
			name?: string,
			url?: string
		}

		interface ResponseList {
			count?: number,
			results?: ResponseItem[]
		}

		export type RequestDTO = listOfEndpoints
		export type ResponseDTO = ResponseList
	}
}
