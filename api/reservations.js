const { Router } = require('express')
const { ValidationError } = require('sequelize')
const router = Router()

const Reservation = require('../models/reservation')

router.post('/', async function (req, res, next) {
    try {
        const reservation = await Reservation.create(req.body, [
            'start', 'end', 'userId', 'lodgingId'
        ])
        res.status(201).send({ id: reservation.id })
    } catch (e) {
        if (e instanceof ValidationError) {
            res.status(400).send({
                err: e.message
            })
        } else {
            throw e
        }
    }
})

module.exports = router
