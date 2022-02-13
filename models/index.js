const User = require("./user");
const Activity = require("./activity");
const Attendance = require("./attendance");

//User and Activity have many to many relationship through attendance table

User.belongsToMany(Activity, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Attendance,
    //field referenced in the association must have a unique constraint placed on it.
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: "user_attendances",
  foreignKey: "user_id",
});

Activity.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Attendance,
    //field referenced in the association must have a unique constraint placed on it.
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: "activity_attendances",
  foreignKey: "activity_id",
});

module.exports = { User, Activity, Attendance };
