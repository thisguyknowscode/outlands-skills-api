import { provideEmbedding } from '../providers/embeddingProvider'

const createEmbedding = async (userQuery: string) => {
	try {
		const embedding = await provideEmbedding(userQuery)

		return embedding
	} catch (err) {
		console.error(err)

		throw err
	}
}

export {
	createEmbedding,
}