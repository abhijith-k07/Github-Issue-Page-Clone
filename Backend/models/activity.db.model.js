const { DataTypes } = require('sequelize');
const { sequelize } = require('../connections/dbConnection');

const activityTable = sequelize.define('Activities', {
    activityBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issueId: {
        type: DataTypes.UUID,
        allowNull: false
    }
});

(async () => {
    await activityTable.sync({ alter: true });
})()

module.exports = activityTable;