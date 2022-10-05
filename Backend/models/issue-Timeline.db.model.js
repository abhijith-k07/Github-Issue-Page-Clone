const { DataTypes } = require('sequelize');
const { sequelize } = require('../connections/dbConnection');

const issueTimelineTable = sequelize.define('Timelines', {
    issueId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    comments: {
        type: DataTypes.JSON,
        allowNull: false
    },
    activities: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    await issueTimelineTable.sync({ alter: true });
})()

module.exports = issueTimelineTable;