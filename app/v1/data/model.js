import { Sequelize } from "sequelize";

import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Data = db.define('data', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            notEmty: true
        }
    },
    uid: {
        type: DataTypes.STRING,
    },
    lat: {
        type: DataTypes.DOUBLE,
    },
    long: {
        type: DataTypes.DOUBLE,
    }
}, {
    freezeTableName: true
});

export default Data;