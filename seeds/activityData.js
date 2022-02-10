const { Activity } = require("../models");

const activityData = [
  {
    title: "2 mile walk around the park",
    description: "Morning walk around the park, bring your dogs!",
    date_created: "March 30, 2018",
    location: "John D. Morgan Park",
    image: "Insert Image",
    user_id: 1,
  },
  {
    title: "Hiking in the mountains",
    description: "Sunday morning hike!",
    date_created: "November 30, 2018",
    location: "Morgan Hills Park",
    image: "Insert Image",
    user_id: 2,
  },

  {
    title: "Fun swimming day",
    description: "Don't forget your towels",
    date_created: "March 30, 2018",
    location: "Community club center",
    image: "Insert Image",
    user_id: 3,
  },
  {
    title: "Yoga day",
    description: "Under the sunny beach..",
    date_created: "March 30, 2018",
    location: "Santa Cruz beach",
    image: "Insert Image",
    user_id: 3,
  },
];

const seedBlog = () => Activity.bulkCreate(activityData);

module.exports = seedBlog;
