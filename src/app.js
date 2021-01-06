import express from 'express'
import config from './config'
import MoviesRoutes from './routes/movies.routes'

const app = express()

app.set('port', config.serverPort || 4000)

app.use('/api/movies',MoviesRoutes)

export default app;