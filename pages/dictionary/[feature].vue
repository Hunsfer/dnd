<script setup lang='ts'>
import { useRoute } from "nuxt/app";
import { useDictionaryItemStore } from "~/stores/dictionary/dictionary.item"
import { storeToRefs } from "pinia";

const route = useRoute()

const featureStore = useDictionaryItemStore(route.params.feature)
const { feature, isLoading } = storeToRefs(featureStore)
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
					{{ feature.name }}
				</v-card-title>
				<v-row>
					<v-col cols="6">
						<v-card-subtitle>
							Class:
						</v-card-subtitle>
						<v-card-text>
							{{ feature.class.name }} {{ feature.level }} lvl
						</v-card-text>
						<template v-if="feature.subclass">
							<v-card-subtitle>
								Subclass:
							</v-card-subtitle>
							<v-card-text>
								{{ feature.subclass.name }}
							</v-card-text>
						</template>
						<v-card-subtitle>
							Description:
						</v-card-subtitle>
						<v-card-text v-for="item in feature.desc" :key="item">
							{{ item }}
						</v-card-text>
					</v-col>
					<v-col v-if="feature.feature_specific" cols="6">
						<v-card-subtitle>
							Specific options:
						</v-card-subtitle>
						<template v-if="feature.feature_specific.invocations && feature.feature_specific.invocations.length">
							<ul>
								<li v-for="invocation in feature.feature_specific.invocations" :key="invocation.index">
									<nuxt-link :to="{ name: 'dictionary-feature', params: { feature: invocation.index } }" class="text-white">
										{{ invocation.name }}
									</nuxt-link>
								</li>
							</ul>
						</template>
						<template v-if="feature.feature_specific.subfeature_options">
							<ul>
								<li v-for="option in feature.feature_specific.subfeature_options.from.options" :key="option.item.index">
									<nuxt-link :to="{ name: 'dictionary-feature', params: { feature: option.item.index } }" class="text-white">
										{{ option.item.name }}
									</nuxt-link>
								</li>
							</ul>
						</template>
						<template v-if="feature.feature_specific.expertise_options">
							<ul>
								<li v-for="option in feature.feature_specific.expertise_options.from.options" :key="option.item.index">
									{{ option.item.name }}
								</li>
							</ul>
						</template>
					</v-col>
				</v-row>
			</v-card>
		</v-skeleton-loader>
	</v-container>
</template>

<style scoped lang='scss'>
</style>
