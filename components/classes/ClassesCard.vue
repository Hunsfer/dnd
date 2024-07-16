<script setup lang='ts'>
import { Classes } from "~/types/classes";
import { useClassesItemStore } from "~/stores/classes/classes.item";
import { storeToRefs } from "pinia";
import { getDiceString } from "~/helpers/utils";

const props = withDefaults(defineProps<{
	index: Classes.ClassesTypes.ClassIndex
}>(), {
	index: Classes.ClassesTypes.ClassIndex.Barbarian
})

const classItemStore = useClassesItemStore(props.index)
const { classItem, isLoading } = storeToRefs(classItemStore)
</script>

<template>
	<v-tabs-window-item :value="props.index">
		<template v-if="classItem">
			<v-card-title>
				{{ classItem.name }}
			</v-card-title>

			<v-row>
				<v-col cols="4">
					<v-card color="primary" class="mt-2 mx-2 fill-height" :loading="isLoading">
						<v-card-title>
							Hit points
						</v-card-title>
						<v-card-text>
							Hit	Dice: {{ getDiceString(1, classItem.hit_die) }} per {{ classItem.name.toLowerCase() }} level
						</v-card-text>
						<v-card-text>
							Hit	Points at 1st	Level: {{ classItem.hit_die }} + your Constitution modifier
						</v-card-text>
						<v-card-text>
							Hit	Points at Higher Levels: {{ getDiceString(1, classItem.hit_die) }} (or	{{ classItem.hit_die / 2 + 1 }}) + your Constitution modifier per	{{ classItem.name.toLowerCase() }}	level	after	1st
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="4">
					<v-list color="primary">
						<v-list-subheader>
							Proficiencies
						</v-list-subheader>
						<nuxt-link
							v-for="prof in classItem.proficiencies"
							:key="prof.key"
							:to="{
									name: 'proficiencies-proficiency',
									params: {
										proficiency: prof.index
									}
								}"
							class="text-white"
						>
							<v-list-item link>
								{{ prof.name }}
							</v-list-item>
						</nuxt-link>
					</v-list>
				</v-col>
				<v-col cols="4">
					<v-card color="primary" class="mt-2 mx-2 fill-height" :loading="isLoading">
						<v-card-title>
							Equipment
						</v-card-title>
						<v-card-text>
							You	start	with the	following	equipment, in	addition to	the	equipment	granted	by your	background:
						</v-card-text>
						<ul class="ps-4 ml-4">
							<li v-for="equip in classItem.starting_equipment_options" :key="equip.desc">
								{{ equip.desc }}
							</li>
						</ul>
					</v-card>
				</v-col>
			</v-row>

			<classes-levels v-if="!isLoading" :class-item="classItem" class="mt-4" />
		</template>
	</v-tabs-window-item>
</template>

<style scoped lang='scss'>
</style>
