<script setup lang='ts'>
import { ref } from 'vue'

const links = [
	{
		to: {
			name: 'classes'
		},
		label: 'Classes',
		icon: 'mdi-account-group'
	},
	{
		to: {
			name: 'dictionary'
		},
		label: 'Dictionary',
		icon: 'mdi-book-alphabet'
	}
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
					v-for="link in links"
					:key="link.to.name"
					:prepend-icon="link.icon"
					link
				>
					<nuxt-link
						:to="link.to"
						class="text-decoration-none text-white"
					>
						{{ link.label }}
					</nuxt-link>
				</v-list-item>
			</v-list>

	</v-navigation-drawer>
</template>

<style scoped lang='scss'>
</style>
