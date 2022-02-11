const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require('./user')

class Activity extends Model { }

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    activity_date: {
      type: DataTypes.DATE,
      get() {
        const date = new Date();
        return `${date.toLocaleDateString([], {month: 'long', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'})}`
      }
    },
    image: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "activity",
  }
);

module.exports = Activity;
