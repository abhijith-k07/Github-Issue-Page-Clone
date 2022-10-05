const { DataTypes } = require('sequelize');
const { sequelize } = require('../connections/dbConnection');

const issueTypeDb = sequelize.define('IssueTypes', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defaulLables : {
        type: DataTypes.STRING,
        allowNull: true
    }
});

(async () => {
    issueTypeDb.sync({force: true});
})();

module.exports = issueTypeDb;