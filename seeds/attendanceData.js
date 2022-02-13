const { Attendance } = require("../models");

const attendanceData = [
  {
    activity_id: 1,
    user_id: 1,
  },
  {
    activity_id: 1,
    user_id: 2,
  },
  {
    activity_id: 1,
    user_id: 3,
  },
];

const seedUser = () =>
  Attendance.bulkCreate(attendanceData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;