const { DataTypes } = require('sequelize');
const { sequelize } = require('../connections/dbConnection');

const commentsTable = sequelize.define('Comments', {
    commentedBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issueId: {
        type: DataTypes.UUID,
        allowNull: false
    }
});

(async () => {
    await commentsTable.sync({ alter: true });
})()

module.exports = commentsTable;