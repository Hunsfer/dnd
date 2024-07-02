import { Classes } from "~/types/classes";
import { classSpecifics } from "~/helpers/constants";
import { Spell } from "~/types/spell";

export const getClassSpecificHeaders = (classIndex: Classes.ClassesTypes.ClassIndex) => {
	return classSpecifics[classIndex]
}

export const addOrdinalSuffix = (num: number) => {
	if (num % 100 >= 11 && num % 100 <= 13) {
		return num + "th";
	}

	switch (num % 10) {
		case 1:
			return num + "st";
		case 2:
			return num + "nd";
		case 3:
			return num + "rd";
		default:
			return num + "th";
	}
}

export const getDiceString = (count: number, value: number) => {
	return `${count}d${value}`
}

export const convertWarlockSpellsSlotsData = (spellcasting: Spell.SpellTypes.SpellcastingSummary) => {
	const spellcastingTemplate = { ...spellcasting }
	delete spellcastingTemplate.spells_known
	delete spellcastingTemplate.cantrips_known

	for (let key in spellcastingTemplate) {
		// @ts-ignore
		if (spellcastingTemplate[key] !== 0) {
			const number = parseInt(key.split('_')[3]);
			return addOrdinalSuffix(number);
		}
	}
}
