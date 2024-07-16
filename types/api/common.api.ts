export namespace CommonApi {
	export namespace GetAllResourceUrls {
		export type ResponseDTO = Record<string, string>
	}

	export namespace GetAllAvailableResourcesForAnEndpoint {
		export enum listOfEndpoints {
			AbilityScores = 'ability-scores',
			Classes = 'classes',
			Features = 'features',
			Proficiencies = 'proficiencies'
		}

		export type BaseEntity = {
			index?: string,
			level?: number,
			name?: string,
			url?: string
		}

		export type ArmorClass = {
			type: string,
			value: number
		}

		export type Speed = {
			walk: string,
			swim: string
		}

		export type Sens = {
			passive_perception?: number,
			blindsight?: string,
			darkvision?: string,
			tremorsense?: string,
			truesight?: string
		}

		export type Damage = {
			damage_dice?: string,
			damage_type?: BaseEntity
		}

		export type SpecialAbility = {
			name?: string,
			desc?: string,
			attack_bonus?: number,
			damage?: Damage
		}

		export type BaseOption = {
			desc?: string,
			choose?: number,
			type?: string,
			from?: Record<string, any>
		}

		export enum ActionType {
			Melee = 'melee',
			Ranged = 'ranged',
			Ability = 'ability',
			Magic = 'magic'
		}

		type ActionField = {
			action_name: string,
			count: number,
			type: ActionType
		}

		type Dc = {
			dc_type: BaseEntity,
			dc_value: number,
			success_type: string
		}

		type Attack = {
			name: string,
			dc: Dc,
			damage: Damage
		}

		export type Action = {
			name?: string,
			multiattack_type?: string,
			desc?: string,
			action_options?: BaseOption,
			actions?: ActionField[],
			options?: BaseOption,
			attack_bonus?: number,
			dc?: Dc,
			attacks?: Attack[],
			damage: Damage[]
		}

		export type ResponseList = {
			count?: number,
			results?: BaseEntity[]
		}

		export type RequestDTO = listOfEndpoints
		export type ResponseDTO = ResponseList
	}
}
