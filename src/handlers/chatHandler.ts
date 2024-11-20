import { createEmbedding } from '../services/embeddingService'
import { vectorSearch } from '../services/vectorService'
import { queryLLM } from '../services/openAIService'
import dotenv from '@dotenvx/dotenvx'
import EventBodyType from '../types/EventBodyType'

dotenv.config()

exports.chatHandler = async (event: any) => {
	try {
		const { query }: EventBodyType = JSON.parse(event.body ?? event)
		const embedding = await createEmbedding(query)
		const vectorMatches = await vectorSearch(embedding)
		const results = await queryLLM(query, vectorMatches)

		if (results) {
			return {
				statusCode: 200,
				body: JSON.stringify(results),
			}
		}
	} catch (err) {
		return JSON.stringify({
			statusCode: 500,
			body: `Something went wrong: ${err}`,
		})
	}

	return JSON.stringify({
		statusCode: 200,
		body: 'No results',
	})
}