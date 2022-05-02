// required Models and connection.js
const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Note extends Model {}

Note.init(
    {
        note_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        note_title: {
            type: DataTypes.STRING
        },
        note_body: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note'
    }
);

module.exports = Note;