<script setup lang='ts'>
import { useRoute } from "nuxt/app";
import { storeToRefs } from "pinia";
import { useProficiencyStore } from "~/stores/dictionary/proficiencies/proficiencies.item";

const route = useRoute()

const proficiencyStore = useProficiencyStore(route.params.proficiency)
const { proficiency, isLoading } = storeToRefs(proficiencyStore)
</script>

<template>
	<v-container class="py-8 px-6" fluid>
		<v-skeleton-loader
			:loading="isLoading"
			class="mx-auto border"
			type="article, paragraph, text"
		>
			<v-card class="w-100">
				<v-card-title>
					{{ proficiency.name }}
				</v-card-title>
				<v-row>
					<v-col cols="6">
						<v-card-subtitle>
							Type:
						</v-card-subtitle>
						<v-card-text>
							{{ proficiency.type }}
						</v-card-text>
						<template v-if="proficiency.classes && proficiency.classes.length">
							<v-list>
								<v-list-subheader>
									Classes
								</v-list-subheader>
								<v-list-item
									v-for="classItem in proficiency.classes"
									:key="classItem.index"
									rounded="shaped"
									color="primary"
								>
									{{ classItem.name }}
								</v-list-item>
							</v-list>
						</template>
						<template v-if="proficiency.races && proficiency.races.length">
							<v-list-subheader>
								Races
							</v-list-subheader>
							<v-list>
								<v-list-item
									v-for="race in proficiency.races"
									:key="race.index"
									rounded="shaped"
									color="primary"
								>
									{{ race.name }}
								</v-list-item>
							</v-list>
						</template>
					</v-col>
				</v-row>
			</v-card>
		</v-skeleton-loader>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
