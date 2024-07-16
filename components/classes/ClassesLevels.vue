<script setup lang='ts'>
import { Classes } from "~/types/classes";
import { useClassesLevels } from "~/stores/classes/classes.levels";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { getClassSpecificHeaders, addOrdinalSuffix, getDiceString, convertWarlockSpellsSlotsData } from "~/helpers/utils";
import { CommonApi } from "~/types/api/common.api";

const props = withDefaults(defineProps<{
	classItem: Classes.ClassesTypes.ClassItem | null
}>(), {
	classItem: null
})

const levelsStore = useClassesLevels(props.classItem.index)
const { levels, isLoading } = storeToRefs(levelsStore)

const headers = computed(() => {
	if (props.classItem) {
		return [
			{
				title: 'Level',
				key: 'level',
				sortable: false,
				align: 'center'
			},
			{
				title: 'Proficiency Bonus',
				key: 'prof_bonus',
				sortable: false,
				align: 'center'
			},
			{
				title: 'Features',
				key: 'features',
				sortable: false
			},
			...getClassSpecificHeaders(props.classItem.index)
		]
	} else {
		return []
	}
})

const items = computed(() => {
	return levels.value.map((level) => {
		return {
			level: level.level,
			prof_bonus: level.prof_bonus,
			features: level.features,
			spellcasting: level.spellcasting,
			...level.class_specific,
			...level.spellcasting
		}
	})
})

const showFeatures = (features: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity[]) => {
	const names = features.map(feature => feature.name)
	return names.join(', ')
}
</script>

<template>
	<v-data-table-virtual
		:headers="headers"
		:loading="isLoading"
		:items="items"
	>
		<template v-slot:item.level="{ value }">
			{{ addOrdinalSuffix(value) }}
		</template>
		<template v-slot:item.prof_bonus="{ value }">
			{{ '+' + value }}
		</template>
		<template v-slot:item.features="{ item }">
			<div class="d-flex flex-column">
				<nuxt-link
					v-for="feature in item.features"
					:key="feature.index"
					:to="{ name: 'features-feature',
						params: { feature: feature.index } }"
					class="text-white"
				>
					{{ feature.name }}
				</nuxt-link>
			</div>
		</template>
		<template v-slot:item.martial_arts="{ value }">
			{{ getDiceString(value.dice_count, value.dice_value) }}
		</template>
		<template v-slot:item.unarmored_movement="{ value }">
			{{ '+' + value + 'ft.' }}
		</template>
		<template v-slot:item.sneak_attack="{ value }">
			{{ getDiceString(value.dice_count, value.dice_value) }}
		</template>
		<template v-slot:item.spellcasting="{ value }">
			{{ convertWarlockSpellsSlotsData(value) }}
		</template>
	</v-data-table-virtual>
</template>

<style scoped lang='scss'>
</style>
