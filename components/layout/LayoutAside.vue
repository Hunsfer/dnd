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
				<nuxt-link
					v-for="link in links"
					:key="link.to.name"
					:to="link.to"
					class="text-decoration-none text-white"
				>
					<v-list-item
						:prepend-icon="link.icon"
						link
					>
							{{ link.label }}
					</v-list-item>
				</nuxt-link>
			</v-list>

	</v-navigation-drawer>
</template>

<style scoped lang='scss'>
</style>
