const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attendance extends Model {}

Attendance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "activity",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "attendance",
  }
);

module.exports = Attendance;
