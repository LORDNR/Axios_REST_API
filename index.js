require('dotenv').config()
const express = require('express')
const app = express()
//router
const v1 = express.Router()
app.use('/api/v1', v1)

//port
const port = process.env.PORT || 3001

//homepage route
app.get('/', (req, res) => {
    return res.send({
        err: false,
        msg: 'Welcome to RESTful CRUD API with Nodejs, Express, Mysql',
        written_by: 'Ratchanon',
    })
})

const apiRate = require('./services/api_changRate')
app.use('/rate', apiRate)

// Run Server
app.listen(port, () => {
    console.log(`listening on port: ${port}...`)
})
