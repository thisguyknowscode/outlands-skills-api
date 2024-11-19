import express from 'express'
import chatHandler from './src/handlers/chatHandler'
import loaderHandler from './src/handlers/loaderHandler'
import dotenv from '@dotenvx/dotenvx'

const app = express()

dotenv.config()

app.use(express.json())

app.post('/chat', chatHandler)
app.get('/loader', loaderHandler)

app.listen(3000)

console.log('Listening on port 3000. Real original.')