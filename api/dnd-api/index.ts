import { commonApi } from '~/api/dnd-api/common.api'
import { classesApi } from "~/api/dnd-api/classes.api";
import { dictionaryApi } from "~/api/dnd-api/dictionary";

const dndApi = {
	common: commonApi,
	classes: classesApi,
	dictionary: dictionaryApi
}

export default dndApi
