<script setup lang='ts'>
const tab = ref('features')

const tabs = [
	{
		key: 'features',
		title: 'Features'
	}
]
</script>

<template>
	<v-container class="py-8 px-6" fluid>
		<v-tabs
			v-model="tab"
			bg-color="secondary"
			next-icon="mdi-arrow-right-bold-box-outline"
			prev-icon="mdi-arrow-left-bold-box-outline"
			show-arrows
		>
			<v-tab v-for="tab in tabs" :key="tab.key">
				{{ tab.title }}
			</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab">
			<dictionary-tab v-for="tab in tabs" :key="tab.key + 'window'" :index="tab.key" />
		</v-tabs-window>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
