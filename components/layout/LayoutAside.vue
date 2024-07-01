<script setup lang='ts'>
import { ref } from 'vue'

const links = [
	['mdi-inbox-arrow-down', 'Inbox'],
	['mdi-send', 'Send'],
	['mdi-delete', 'Trash'],
	['mdi-alert-octagon', 'Spam'],
]

const drawer = ref(null)
</script>

<template>
	<v-navigation-drawer v-model="drawer">

		<v-sheet
			class="pa-4"
			color="grey-lighten-4"
		>
			<v-avatar
				class="mb-4"
				color="grey-darken-1"
				size="64"
			/>
			<div>
				samediacc666@gmail.com
			</div>
		</v-sheet>

		<v-divider></v-divider>

			<v-list>
				<v-list-item
					v-for="[icon, text] in links"
					:key="icon"
					:prepend-icon="icon"
					:title="text"
					link
				></v-list-item>
			</v-list>

	</v-navigation-drawer>
</template>

<style scoped lang='scss'>
</style>
