import { similaritySearch } from '../providers/vectorProvider'

const vectorSearch = async (embedding: number[]) => {
	try {
		const similarity = await similaritySearch(embedding)

		if (similarity) {
			return similarity.matches
		}

		return []
	} catch (err) {
		console.error(err)

		return []
	}
}

export {
	vectorSearch,
}