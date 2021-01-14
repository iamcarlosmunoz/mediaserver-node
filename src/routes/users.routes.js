import { Router } from 'express'
import fs from 'fs'

const router = Router()

let users = JSON.parse(fs.readFileSync('src/data/users.json', 'utf-8'))

router.get('/', function(req, res) {
    res.json(users)
})

router.post('/upload', async function(req, res) {

    console.log(req.body)
    await users.forEach(element => {
        if (element.id === req.body.id) {
            element.movies_watching = req.body.movies_watching
            return 
        }
    })

    const json_users = JSON.stringify(users)
    fs.writeFileSync('src/data/users.json', json_users)

    res.sendStatus(200)

})

router.get('/:id', async function(req, res) {

    let user = undefined

    await users.forEach(element => {
        if (element.id === parseInt(req.params.id, 10)) {
            user = element;
            return 
        }
    })

    res.json(user)
})

export default router