import { CommonApi } from "~/types/api/common.api";

export namespace Spell {
	export namespace SpellTypes {
		type SpellcastingInfo = {
			name?: string,
			desc?: string
		}

		export type Spellcasting = {
			level?: number,
			info?: SpellcastingInfo[],
			spellcasting_ability?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity
		}

		export type SpellcastingSummary = {
			cantrips_known?: number,
			spells_known?: number,
			spell_slots_level_1?: number,
			spell_slots_level_2?: number,
			spell_slots_level_3?: number,
			spell_slots_level_4?: number,
			spell_slots_level_5?: number,
			spell_slots_level_6?: number,
			spell_slots_level_7?: number,
			spell_slots_level_8?: number,
			spell_slots_level_9?: number
		}
	}
}
