const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize')

const Reservation = sequelize.define('reservation', {
    start: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    end: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Reservation
