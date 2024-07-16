import { commonApi } from '~/api/dnd-api/common.api'
import { classesApi } from "~/api/dnd-api/classes.api";
import { dictionaryApi } from "~/api/dnd-api/dictionary";
import { bestiaryApi } from "~/api/dnd-api/bestiary";

const dndApi = {
	common: commonApi,
	classes: classesApi,
	dictionary: dictionaryApi,
	bestiary: bestiaryApi
}

export default dndApi
