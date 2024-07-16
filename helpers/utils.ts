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

export const convertChallengeRatingToStars = (number: number) => {
	const ratings: Record<number, number> = {
		0: 0,
		0.125: 0.14,
		0.25: 0.28,
		0.5: 0.42,
		1: 0.56,
		2: 0.7,
		3: 0.84,
		4: 1,
		5: 1.2,
		6: 1.4,
		7: 1.6,
		8: 1.8,
		9: 2,
		10: 2.2,
		11: 2.4,
		12: 2.6,
		13: 2.8,
		14: 3,
		15: 3.2,
		16: 3.4,
		17: 3.6,
		19: 3.8,
		20: 4,
		21: 4.2,
		22: 4.4,
		23: 4.6,
		24: 4.8,
		30: 5
	};

	return ratings[number]
}
