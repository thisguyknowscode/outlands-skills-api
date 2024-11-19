import OpenAI from 'openai'

const provideEmbedding = async (text: string) => {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	})

	const embedding = await openai.embeddings.create({
		model: "text-embedding-ada-002",
		input: text,
		encoding_format: "float",
	})

	return embedding.data[0].embedding
}

export {
	provideEmbedding,
}