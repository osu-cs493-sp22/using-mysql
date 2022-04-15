const express = require('express')
const morgan = require('morgan')

const api = require('./api')

const app = express()
const port = process.env.PORT || 8000

/*
 * Use the popular logger Morgan: https://github.com/expressjs/morgan.
 */
app.use(morgan('dev'))

app.use(express.json())

/*
 * API endpoints are factored into the api/ directory.
 */
app.use('/', api)

app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
})

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
