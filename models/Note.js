// required Models and connection.js
const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const config = require(__dirname + "./config/config.js")[env];

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;