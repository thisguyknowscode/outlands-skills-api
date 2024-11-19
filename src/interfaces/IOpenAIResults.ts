export default interface IOpenAIResults {
	choices?: [{
		message?: {
			role?: string
			content?: string
			refusal?: string | null
		}
	}]
}