import { query } from '../providers/openAIProvider'
import IVectorMatches from '../interfaces/IVectorMatches'

const queryLLM = async (userQuery: string, vectorMatches: IVectorMatches[]) => {
	const metaContext = vectorMatches.map(vectorMatch => vectorMatch.metadata.description)
	const joinedMetaContext = metaContext.join(String.fromCharCode(13))

	const promptContext = `
		You are a helpful assistant that can answer questions about skills in the video game Outlands. Please only use the provided context to answer any questions about Outlands skills.

		Examples:

		Question: What is the skill cap for Fencing?
		Answer: The skill cap for fencing is 100.

		Question: What skills increase damage for melee weapons?
		Answer: Camping and Tracking skills each increase damage by 25% at 100 skill or 30% at 120 skill.

		Context:

		${joinedMetaContext}
	`

	try {
		const queryResult = await query(userQuery, promptContext)

		const mappedChoices = queryResult?.choices.map(choice => {
			const { message } = choice

			return {
				content: message.content,
			}
		})

		return mappedChoices
	} catch (err) {
		console.error(err)

		throw err
	}
}

export {
	queryLLM,
}