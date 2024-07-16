import { CommonApi } from "~/types/api/common.api";
import { Proficiency } from "~/types/proficiency";

export namespace Bestiary {
	export namespace BestiaryTypes {
		enum size {
			Tiny = 'Tiny',
			Small = 'Small',
			Medium = 'Medium',
			Large = 'Large',
			Huge = 'Huge',
			Gargantuan = 'Gargantuan'
		}

		type BestiaryItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>

		export type BestiaryList = {
			count: number,
			results: BestiaryItem[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.ResponseList

		export type Monster = {
			size: size,
			type: string,
			alignment: string,
			armor_class: CommonApi.GetAllAvailableResourcesForAnEndpoint.ArmorClass,
			hit_points: number,
			hit_dice: string,
			hit_points_roll: string,
			speed: CommonApi.GetAllAvailableResourcesForAnEndpoint.Speed,
			strength: number,
			dexterity: number,
			constitution: number,
			intelligence: number,
			wisdom: number,
			charisma: number,
			proficiencies: Proficiency.ProficiencyTypes.ProficiencyField,
			damage_vulnerabilities: string[],
			damage_resistances: string[],
			damage_immunities: string[],
			condition_immunities: Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>,
			senses: CommonApi.GetAllAvailableResourcesForAnEndpoint.Sens,
			languages: string,
			challenge_rating: number,
			proficiency_bonus: number,
			xp: number,
			special_abilities: CommonApi.GetAllAvailableResourcesForAnEndpoint.SpecialAbility[],
			actions: CommonApi.GetAllAvailableResourcesForAnEndpoint.Action[],
			legendary_actions: CommonApi.GetAllAvailableResourcesForAnEndpoint.Action[],
			image: string
		} & Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>
	}

	export namespace BestiaryApi {
		export namespace getBestiary {
			export type RequestDTO = Partial<{
				challengeRating: number[]
			}>

			export type ResponseDTO = BestiaryTypes.BestiaryList
		}

		export namespace getMonsterByIndex {
			export type RequestDTO = string

			export type ResponseDTO = BestiaryTypes.Monster
		}
	}
}
