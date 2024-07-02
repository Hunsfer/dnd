export namespace CommonApi {
	export namespace GetAllResourceUrls {
		export type ResponseDTO = Record<string, string>
	}

	export namespace GetAllAvailableResourcesForAnEndpoint {
		export enum listOfEndpoints {
			AbilityScores = 'ability-scores',
			Classes = 'classes'
		}

		export type BaseEntity = {
			index?: string,
			level?: number,
			name?: string,
			url?: string
		}

		export type BaseOption = {
			desc?: string,
			choose?: number,
			type?: string,
			from?: Record<string, any>
		}

		export type ResponseList = {
			count?: number,
			results?: BaseEntity[]
		}

		export type RequestDTO = listOfEndpoints
		export type ResponseDTO = ResponseList
	}
}
