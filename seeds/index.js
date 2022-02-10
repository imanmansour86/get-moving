const sequelize = require("../config/connection");
const seedActivity = require("./activityData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedActivity();

  await seedUser();

  process.exit(0);
};

seedAll();
