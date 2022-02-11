const sequelize = require("../config/connection");
const seedActivity = require("./activityData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedActivity();

  process.exit(0);
};

seedAll();
