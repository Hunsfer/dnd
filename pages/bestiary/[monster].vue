<script setup lang='ts'>
import { useBestiaryItemStore } from "~/stores/bestiary/bestiary.item";
import { useRoute } from "nuxt/app";
import { storeToRefs } from "pinia";
import { convertChallengeRatingToStars } from '~/helpers/utils'
import { computed } from "vue";

const route = useRoute()

const monsterStore = useBestiaryItemStore(route.params.monster)
const { monster, isLoading } = storeToRefs(monsterStore)

const monsterCharacteristics = computed(() => {
	return {
		STR: monster.value.strength,
		DEX: monster.value.dexterity,
		CON: monster.value.constitution,
		INT: monster.value.intelligence,
		WIS: monster.value.wisdom,
		CHA: monster.value.charisma
	}
})

const languages = computed(() => {
	return monster.value.languages.split(', ')
})

const formatString = (string: string) => {
	return string.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
</script>

<template>
	<v-container class="d-flex justify-center py-8 px-6" fluid>
		<v-card
			:loading="isLoading"
			min-width="900"
			max-width="900"
			class="pb-3"
		>

			<template v-slot:loader="{ isActive }">
				<v-progress-linear
					:active="isActive"
					color="deep-purple"
					height="4"
					indeterminate
				></v-progress-linear>
			</template>

			<v-img
				aspect-ratio="16/9"
				max-height="600"
				cover
				:src="'/dnd-api' + monster.image"
			>
				<template v-slot:placeholder>
					<div class="d-flex align-center justify-center fill-height">
						<v-progress-circular
							color="grey-lighten-4"
							indeterminate
						></v-progress-circular>
					</div>
				</template>
			</v-img>

			<v-card-item>
				<v-card-title>
					{{ monster.name }}
				</v-card-title>
				<v-card-subtitle>
					<span class="me-1">
						{{ monster.type }}
					</span>
				</v-card-subtitle>
			</v-card-item>

			<v-card-text>
				<v-row
					align="center"
					class="mx-0"
				>
					<v-rating
						:model-value="convertChallengeRatingToStars(monster.challenge_rating)"
						color="amber"
						density="compact"
						size="small"
						half-increments
						readonly
					></v-rating>

					<div class="text-grey ms-4">
						Challenge rating: {{ monster.challenge_rating }}
					</div>
				</v-row>

				<div class="my-4 text-subtitle-1">
					XP: {{ monster.xp }} • Alignment: {{ monster.alignment }} • Size: {{ monster.size }} • HP: {{ monster.hit_points }} • HD: {{ monster.hit_dice }} • HP roll: {{ monster.hit_points_roll }} • Proficiency bonus: + {{ monster.proficiency_bonus }}
				</div>
			</v-card-text>

			<v-divider class="mx-4 mb-1"></v-divider>

			<v-card-title>Characteristics</v-card-title>

			<div class="px-4 mb-2">
				<v-chip-group selected-class="bg-deep-purple-lighten-2">
					<v-chip v-for="(value, key) in monsterCharacteristics" :key="key">
						{{ key }}: {{ value }}
					</v-chip>
				</v-chip-group>
			</div>

			<template v-if="monster.senses">
				<v-card-title>Senses</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="(value, key) in monster.senses" :key="key">
							{{ formatString(key) }}: {{ value }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.speed">
				<v-card-title>Speed</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="(value, key) in monster.speed" :key="key">
							{{ formatString(key) }}: {{ value }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.armor_class.length">
				<v-card-title>Armor</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="armorClass in monster.armor_class" :key="armorClass.type">
							{{ formatString(armorClass.type) }}: {{ armorClass.value }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.damage_resistances.length">
				<v-card-title>Damage resistances</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="resist in monster.damage_resistances" :key="resist + 'damage_resistances'">
							{{ formatString(resist) }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.damage_immunities.length">
				<v-card-title>Damage immunities</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="immunity in monster.damage_immunities" :key="immunity + 'damage_immunities'">
							{{ formatString(immunity) }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.damage_vulnerabilities.length">
				<v-card-title>Damage vulnerabilities</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="vulnerability in monster.damage_vulnerabilities" :key="vulnerability + 'damage_vulnerabilities'">
							{{ formatString(vulnerability) }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.condition_immunities.length">
				<v-card-title>Condition immunitiess</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="immunity in monster.condition_immunities" :key="immunity + 'condition_immunities'">
							{{ formatString(immunity.name) }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>

			<template v-if="monster.languages.length">
				<v-card-title>Languages</v-card-title>

				<div class="px-4 mb-2">
					<v-chip-group selected-class="bg-deep-purple-lighten-2">
						<v-chip v-for="lang in languages" :key="lang">
							{{ lang }}
						</v-chip>
					</v-chip-group>
				</div>
			</template>


			<template v-if="monster.proficiencies.length">
				<v-divider class="mx-4 mb-1"></v-divider>

				<v-card-title>Proficiencies</v-card-title>

				<div class="px-4 mb-2">
					<v-list color="primary">
						<nuxt-link
							v-for="item in monster.proficiencies"
							:key="item.proficiency.index"
							:to="{
									name: 'proficiencies-proficiency',
									params: {
										proficiency: item.proficiency.index
									}
								}"
							class="text-white"
						>
							<v-list-item link>
								{{ item.proficiency.name }}: {{ item.value }}
							</v-list-item>
						</nuxt-link>
					</v-list>
				</div>
			</template>

			<v-divider class="mx-4 mb-1"></v-divider>

			<template v-if="monster.actions.length">
				<v-card-title>Actions</v-card-title>

				<div class="d-flex ga-1 flex-wrap mx-4 mb-2">
					<v-card
						v-for="action in monster.actions"
						:key="action.name"
						color="indigo"
						min-width="430"
						max-width="430"
					>
						<v-card-item>
							<div>
								<div class="text-overline mb-1">
								</div>
								<div class="text-h6 mb-1">
									{{ action.name }}
								</div>
								<div class="text-caption">{{ action.desc }}</div>
							</div>
						</v-card-item>
					</v-card>
				</div>
			</template>

			<template v-if="monster.legendary_actions.length">
				<v-card-title>Legendary actions</v-card-title>

				<div class="d-flex ga-1 flex-wrap mx-4 mb-2">
					<v-card
						v-for="action in monster.legendary_actions"
						:key="action.name"
						color="indigo"
						min-width="430"
						max-width="430"
					>
						<v-card-item>
							<div>
								<div class="text-overline mb-1">
								</div>
								<div class="text-h6 mb-1">
									{{ action.name }}
								</div>
								<div class="text-caption">{{ action.desc }}</div>
							</div>
						</v-card-item>
					</v-card>
				</div>
			</template>

			<template v-if="monster.special_abilities.length">
				<v-card-title>Special abilities</v-card-title>

				<div class="d-flex ga-1 flex-wrap mx-4 mb-2">
					<v-card
						v-for="ability in monster.special_abilities"
						:key="ability.name"
						color="indigo"
						min-width="430"
						max-width="430"
					>
						<v-card-item>
							<div>
								<div class="text-overline mb-1">
								</div>
								<div class="text-h6 mb-1">
									{{ ability.name }}
								</div>
								<div class="text-caption">{{ ability.desc }}</div>
								<div v-if="ability.usage" class="text-caption mt-2">
									{{ formatString(ability.usage.type) }}: {{ ability.usage.times }}
								</div>
							</div>
						</v-card-item>
					</v-card>
				</div>
			</template>
		</v-card>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
