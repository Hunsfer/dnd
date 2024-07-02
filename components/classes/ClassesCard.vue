<script setup lang='ts'>
import { Classes } from "~/types/classes";
import { useClassesItemStore } from "~/stores/classes/classes.item";
import { storeToRefs } from "pinia";

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
		<v-card-title>
			{{ classItem.name }}
		</v-card-title>
		<classes-levels v-if="!isLoading" :class-item="classItem" />
	</v-tabs-window-item>
</template>

<style scoped lang='scss'>
</style>
