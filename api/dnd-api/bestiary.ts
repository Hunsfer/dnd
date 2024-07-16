import { Bestiary } from "~/types/bestiary";

export const bestiaryApi = {
	getBestiary: async (filter?: Bestiary.BestiaryApi.getBestiary.RequestDTO): Promise<Bestiary.BestiaryApi.getBestiary.ResponseDTO | null> => {
		try {
			if (filter && filter.challengeRating && filter.challengeRating.length) {
				return $http.$get('/dnd-api/api/monsters', { query: { challenge_rating: filter.challengeRating.toString() } })
			} else {
				return $http.$get('/dnd-api/api/monsters')
			}
		} catch (e) {
			console.log(e);
			return null
		}
	},

	getMonsterByIndex: async (index: Bestiary.BestiaryApi.getMonsterByIndex.RequestDTO): Promise<Bestiary.BestiaryApi.getMonsterByIndex.ResponseDTO | null> => {
		try {
			return $http.$get(`/dnd-api/api/monsters/${index}`)
		} catch (e) {
			console.log(e);
			return null
		}
	}
}
