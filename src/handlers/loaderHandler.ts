import loaderService from '../services/loaderService'

exports.loaderHandler = async () => {
	try {
		await loaderService()
	} catch (err) {
		console.error('loaderHandler=>loaderService', err)

		return {
			statusCode: 500,
			body: `Loading error: ${err}`
		}
	}

	return {
		statusCode: 200,
		body: `Loading success`
	}
}