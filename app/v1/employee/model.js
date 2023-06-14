import { Sequelize } from "sequelize";

import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Employee = db.define('employee', {
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
    nama: {
        type: DataTypes.STRING,
        validate: {
            len: [3, 100]
        }
    },
    gender: {
        type: DataTypes.STRING,
    },
    tgl_lahir: {
        type: DataTypes.DATE,
    },
    tgl_masuk: {
        type: DataTypes.DATE,
    }
}, {
    freezeTableName: true
});

export default Employee;