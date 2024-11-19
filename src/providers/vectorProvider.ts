import { Pinecone } from '@pinecone-database/pinecone'
import UpsertDataType from '../types/UpsertDataType'

const upsertData = async (upsertData: UpsertDataType[]) => {
	const pc = new Pinecone({
		apiKey: process.env.PINECONE_API_KEY!,
	})

	const outlandsSkillsIndex = pc.index(process.env.PINECONE_INDEX!)

	try {
		await outlandsSkillsIndex.upsert(upsertData)
	} catch (err) {
		console.error(err)

		throw err
	}
}

const similaritySearch = async (embedding: number[]) => {
	const pc = new Pinecone({
		apiKey: process.env.PINECONE_API_KEY!,
	})

	const outlandsSkillsIndex = pc.index(process.env.PINECONE_INDEX!)

	try {
		const queryData = await outlandsSkillsIndex.query({
			topK: 3,
			vector: embedding,
			includeValues: false,
			includeMetadata: true,
		})

		return queryData
	} catch (err) {
		console.error(err)
	}
}

export {
	upsertData,
	similaritySearch,
}