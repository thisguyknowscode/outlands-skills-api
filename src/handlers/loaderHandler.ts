import { Request, Response, } from 'express'
import loaderService from '../services/loaderService'

const loaderHandler = async (req: Request, res: Response) => {
	try {
		await loaderService()
	} catch (err) {
		console.error('loaderHandler=>loaderService', err)

		res.status(500).send('This thing has issues')
	}

	res.status(200).send('loaderHandler')
}

export default loaderHandler