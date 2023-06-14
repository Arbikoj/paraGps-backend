import { Sequelize } from "sequelize";
const db = new Sequelize('gps-express', 'bii', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;