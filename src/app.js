import express from 'express'
import path from 'path'
import config from './config'
import MoviesRoutes from './routes/movies.routes'

const app = express()

app.set('port', config.serverPort || 4000)

app.use(express.static('client/build/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.use('/api/movies',MoviesRoutes)

export default app;