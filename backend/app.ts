import express from 'express'
import cors from 'cors'

import devRouter from './controllers/dev-routes'

const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())
app.use(cors())

app.use('/', devRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})