const { DataTypes } = require('sequelize');
const { sequelize } = require('../connections/dbConnection')

const issueTable = sequelize.define('Issues', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issueNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    issueTypeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    raisedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    labels: {
        type: DataTypes.STRING
    }
});

// (async () => {
//     await issueTable.sync({ alter: true });
// })();

module.exports = issueTable;