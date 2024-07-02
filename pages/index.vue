<script setup lang='ts'>
import dndApi from "~/api/dnd-api/index";
import { CommonApi } from "~/types/api/common.api";
</script>

<template>
	<v-container class="py-8 px-6" fluid>
		<v-btn @click="dndApi.common.getAllResourceUrls()">
			Click me!
		</v-btn>
		<v-btn @click="dndApi.common.getAllAvailableResourcesForAnEndpoint(CommonApi.GetAllAvailableResourcesForAnEndpoint.listOfEndpoints.AbilityScores)">
			Click me!
		</v-btn>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
