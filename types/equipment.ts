import { CommonApi } from "~/types/api/common.api";

export namespace Equipment {
	export namespace EquipmentTypes {
		export type Equipment = {
			quantity?: number,
			equipment?: CommonApi.GetAllAvailableResourcesForAnEndpoint.BaseEntity
		}
	}
}
