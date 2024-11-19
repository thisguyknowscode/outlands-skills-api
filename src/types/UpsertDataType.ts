import { VectorMetadataType } from './VectorMetadataType'

type UpsertDataType = {
	id: string,
	values: any[],
	metadata: VectorMetadataType,
}

export default UpsertDataType