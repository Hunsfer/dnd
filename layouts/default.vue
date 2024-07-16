<script setup lang='ts'>
</script>

<template>
	<v-layout class="rounded rounded-md">
		<layout-aside />

		<v-main class="d-flex align-center justify-center">
			<slot />
		</v-main>
	</v-layout>
</template>

<style scoped lang='scss'>
</style>
