import { CommonApi } from "~/types/api/common.api";
import { Equipment } from "~/types/equipment";
import { MultiClassing } from "~/types/multiClassing";
import { Spell } from "~/types/spell";

export namespace Classes {
	export namespace ClassesTypes {
		export enum ClassIndex {
			Barbarian = 'barbarian',
			Bard = 'bard',
			Cleric = 'cleric',
			Druid = 'druid',
			Fighter = 'fighter',
			Monk = 'monk',
			Paladin = 'paladin',
			Ranger = 'ranger',
			Rogue = 'rogue',
			Sorcerer = 'sorcerer',
			Warlock = 'warlock',
			Wizard = 'wizard'
		}

		export type ClassesItem = Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'level'>

		export type ClassesResult = {
			count: number,
			results: ClassesItem[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.ResponseList

		export type ClassItem = {
			hit_die?: number,
			class_levels?: string,
			multi_classing?: MultiClassing.MultiClassingTypes.MultiClassing,
			spellcasting?: Spell.SpellTypes.Spellcasting,
			spells?: string,
			starting_equipment?: Equipment.EquipmentTypes.Equipment[],
			starting_equipment_options?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseOption[]
			proficiency_choices?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseOption[],
			proficiencies?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity[],
			saving_throws?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity[],
			subclasses?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity[]
		} & CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity

		export type ClassLevel = {
			ability_score_bonuses?: number,
			prof_bonus?: number,
			features?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity,
			spellcasting?: Spell.SpellTypes.SpellcastingSummary,
			class_specific?: Record<string, any>
		} & Omit<CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity, 'name'>
	}

	export namespace ClassesApi {
		export namespace GetAllClasses {
			export type ResponseDTO = ClassesTypes.ClassesResult
		}

		export namespace GetClassByIndex {
			export type RequestDTO = ClassesTypes.ClassIndex

			export type ResponseDTO = ClassesTypes.ClassItem
		}

		export namespace GetAllLevelResourceByClass {
			export type RequestDTO = {
				index: ClassesTypes.ClassIndex,
				query?: {
					subclass: string
				}
			}

			export type ResponseDTO = ClassesTypes.ClassLevel[]
		}
	}
}
