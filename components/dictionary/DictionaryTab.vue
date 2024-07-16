<script setup lang='ts'>
import { computed } from "vue";
import { DictionaryFeature } from '#components'
import { DictionaryProficiency } from '#components'

const props = withDefaults(defineProps<{
	index: string
}>(), {
	index: ''
})

const windowItem = computed(() => {
	switch (props.index) {
		case 'features':
			return DictionaryFeature
		case 'proficiencies':
			return DictionaryProficiency
	}
})
</script>

<template>
	<v-tabs-window-item>
		<component :is="windowItem" />
	</v-tabs-window-item>
</template>

<style scoped lang='scss'>
</style>
