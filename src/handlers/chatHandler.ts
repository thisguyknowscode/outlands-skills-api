import { Request, Response } from 'express'
import { createEmbedding } from '../services/embeddingService'
import { vectorSearch } from '../services/vectorService'
import { queryLLM } from '../services/openAIService'

const chatHandler = async (req: Request, res: Response) => {
	const userQuery = req.body.query

	try {
		const embedding = await createEmbedding(userQuery)
		const vectorMatches = await vectorSearch(embedding)
		const results = await queryLLM(userQuery, vectorMatches)

		if (results) {
			res.status(200).send(results)
		}
	} catch (err) {
		res.status(500).send('Something went wrong.')
	}
}

export default chatHandler