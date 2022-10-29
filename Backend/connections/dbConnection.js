const Sequelize = require('sequelize');

const sequelize = new Sequelize('IssuePage', 'postgres', 'roadtrip', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

async function connectToDb() {
    try {
        await sequelize.authenticate();
        console.log('connected to DB');
    } catch (err) {
        console.log(err);
        console.log('DB connection failed');
    }
}

module.exports = { connectToDb, sequelize };