const User = require("./user");
const Activity = require("./activity");
const Attendance = require("./attendance");

User.hasMany(Activity, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Activity.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Attendance, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Attendance.belongsTo(User, {
  foreignKey: "user_id",
});

Activity.hasMany(Attendance, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
});

Attendance.belongsTo(Activity, {
  foreignKey: "activity_id",
});

module.exports = { User, Activity, Attendance };
