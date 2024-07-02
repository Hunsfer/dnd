import { Classes } from "~/types/classes";

export const classSpecifics: Record<Classes.ClassesTypes.ClassIndex, any[]> = {
	barbarian: [
		{
			key: 'rage_count',
			title: 'Rages',
			sortable: false,
			align: 'center'
		},
		{
			key: 'rage_damage_bonus',
			title: 'Rage damage',
			sortable: false,
			align: 'center'
		},
		{
			key: 'brutal_critical_dice',
			title: 'Brutal critical',
			sortable: false,
			align: 'center'
		}
	],
	bard: [
		{
			key: 'cantrips_known',
			title: 'Cantrips known',
			sortable: false,
			align: 'center'
		},
		{
			key: 'spells_known',
			title: 'Spells known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				},
				{
					title: '6th',
					value: 'spell_slots_level_6',
					align: 'center'
				},
				{
					title: '7th',
					value: 'spell_slots_level_7',
					align: 'center'
				},
				{
					title: '8th',
					value: 'spell_slots_level_8',
					align: 'center'
				},
				{
					title: '9th',
					value: 'spell_slots_level_9',
					align: 'center'
				}
			]
		}
	],
	cleric: [
		{
			key: 'cantrips_known',
			title: 'Cantrips known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				},
				{
					title: '6th',
					value: 'spell_slots_level_6',
					align: 'center'
				},
				{
					title: '7th',
					value: 'spell_slots_level_7',
					align: 'center'
				},
				{
					title: '8th',
					value: 'spell_slots_level_8',
					align: 'center'
				},
				{
					title: '9th',
					value: 'spell_slots_level_9',
					align: 'center'
				}
			]
		}
	],
	druid: [
		{
			key: 'cantrips_known',
			title: 'Cantrips known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				},
				{
					title: '6th',
					value: 'spell_slots_level_6',
					align: 'center'
				},
				{
					title: '7th',
					value: 'spell_slots_level_7',
					align: 'center'
				},
				{
					title: '8th',
					value: 'spell_slots_level_8',
					align: 'center'
				},
				{
					title: '9th',
					value: 'spell_slots_level_9',
					align: 'center'
				}
			]
		}
	],
	fighter: [],
	monk: [
		{
			key: 'martial_arts',
			title: 'Martial arts',
			sortable: false,
			align: 'center'
		},
		{
			key: 'ki_points',
			title: 'Ki points',
			sortable: false,
			align: 'center'
		},
		{
			key: 'unarmored_movement',
			title: 'Unarmored movement',
			sortable: false,
			align: 'center'
		}
	],
	paladin: [
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				}
			]
		}
	],
	ranger: [
		{
			key: 'spells_known',
			title: 'Spells known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				}
			]
		}
	],
	rogue: [
		{
			key: 'sneak_attack',
			title: 'Sneak attack',
			sortable: false,
			align: 'center'
		}
	],
	sorcerer: [
		{
			key: 'sorcery_points',
			title: 'Sorcery points',
			sortable: false,
			align: 'center'
		},
		{
			key: 'cantrips_known',
			title: 'Cantrips known',
			sortable: false,
			align: 'center'
		},
		{
			key: 'spells_known',
			title: 'Spells known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				},
				{
					title: '6th',
					value: 'spell_slots_level_6',
					align: 'center'
				},
				{
					title: '7th',
					value: 'spell_slots_level_7',
					align: 'center'
				},
				{
					title: '8th',
					value: 'spell_slots_level_8',
					align: 'center'
				},
				{
					title: '9th',
					value: 'spell_slots_level_9',
					align: 'center'
				}
			]
		}
	],
	warlock: [
		{
			title: 'Slot level',
			key: 'spellcasting',
			sortable: false,
			align: 'center'
		},
		{
			title: 'Invocations known',
			key: 'invocations_known',
			sortable: false,
			align: 'center'
		}
	],
	wizard: [
		{
			key: 'cantrips_known',
			title: 'Cantrips known',
			sortable: false,
			align: 'center'
		},
		{
			title: '—Spell Slots per Spell Level—',
			align: 'center',
			children: [
				{
					title: '1st',
					value: 'spell_slots_level_1',
					align: 'center'
				},
				{
					title: '2nd',
					value: 'spell_slots_level_2',
					align: 'center'
				},
				{
					title: '3rd',
					value: 'spell_slots_level_3',
					align: 'center'
				},
				{
					title: '4th',
					value: 'spell_slots_level_4',
					align: 'center'
				},
				{
					title: '5th',
					value: 'spell_slots_level_5',
					align: 'center'
				},
				{
					title: '6th',
					value: 'spell_slots_level_6',
					align: 'center'
				},
				{
					title: '7th',
					value: 'spell_slots_level_7',
					align: 'center'
				},
				{
					title: '8th',
					value: 'spell_slots_level_8',
					align: 'center'
				},
				{
					title: '9th',
					value: 'spell_slots_level_9',
					align: 'center'
				}
			]
		}
	]
}
