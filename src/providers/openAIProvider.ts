import OpenAI from 'openai'
import { ChatCompletion } from 'openai/resources/chat/completions'

const query = async (userQuery: string, promptContext: string): Promise<ChatCompletion | null> => {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	})

	try {
		const completedQuery = openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [{
				role: 'system',
				content: promptContext,
			}, {
				role: 'user',
				content: userQuery
			}]
		})

		return completedQuery
	} catch (err) {
		console.error(err)

		return null
	}
}

export {
	query,
}