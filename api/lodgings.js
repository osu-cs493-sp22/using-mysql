const router = require('express').Router()

router.get('/lodgings', function (req, res, next) {
    res.status(200).send({})
})

router.post('/lodgings', function (req, res, next) {
    res.status(201).send({})
})

router.get('/lodgings/:id', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

router.patch('/lodgings/:id', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

router.delete('/lodgings/:id', function (req, res, next) {
    const id = req.params.id
    res.status(204).send()
})

module.exports = router
