<script setup lang='ts'>
import { useClassesStore } from "~/stores/classes/classes";
import { storeToRefs } from "pinia";

const classesStore = useClassesStore()
const { classes, isLoading } = storeToRefs(classesStore)

const tab = ref('barbarian')
</script>

<template>
	<v-container class="py-8 px-6" fluid>
		<v-card>
			<template v-if="!isLoading">
				<v-tabs
					v-model="tab"
					bg-color="secondary"
					next-icon="mdi-arrow-right-bold-box-outline"
					prev-icon="mdi-arrow-left-bold-box-outline"
					show-arrows
				>
					<v-tab
						v-for="classItem in classes.results"
						:key="classItem.index + 'tab'"
					>
						{{ classItem.name }}
					</v-tab>
				</v-tabs>

				<v-tabs-window v-model="tab">
					<classes-card v-for="classItem in classes.results" :key="classItem.index" :index="classItem.index" />
				</v-tabs-window>
			</template>
		</v-card>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
