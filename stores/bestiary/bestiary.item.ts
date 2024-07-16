import { defineStore } from "pinia";
// @ts-ignore
import { useLazyAsyncData } from "nuxt/app";
import dndApi from "~/api/dnd-api/index";
import { Bestiary } from "~/types/bestiary";

export const useBestiaryItemStore = (index: Bestiary.BestiaryApi.getMonsterByIndex.RequestDTO) => defineStore(`bestiaryItemStore:${index}`, () => {
	console.log(index);
	const { data: monster, refresh: refreshMonster, pending: isLoading } = useLazyAsyncData(`fetch:bestiaryItem:${index}`, () => {
		return dndApi.bestiary.getMonsterByIndex(index)
	}, {
		default: () => {
			return {
				size: '',
				type: '',
				alignment: '',
				armor_class: [],
				hit_points: 0,
				hit_dice: '',
				hit_points_roll: '',
				speed: {},
				strength: 0,
				dexterity: 0,
				constitution: 0,
				intelligence: 0,
				wisdom: 0,
				charisma: 0,
				proficiencies: {},
				damage_vulnerabilities: [],
				damage_resistances: [],
				damage_immunities: [],
				condition_immunities: {},
				senses: {},
				languages: '',
				challenge_rating: 0,
				proficiency_bonus: 0,
				xp: 0,
				special_abilities: [],
				actions: [],
				legendary_actions: [],
				image: ''
			}
		}
	})

	return {
		monster,
		refreshMonster,
		isLoading
	}
})()
