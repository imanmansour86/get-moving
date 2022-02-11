const sequelize = require("../config/connection");
const seedActivity = require("./activityData");
const seedUser = require("./userData");
const seedAttendance = require("./attendanceData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedActivity();

  await seedUser();

  await seedAttendance();

  process.exit(0);
};

seedAll();
