const { Activity } = require("../models");

const activityData = [
  {
    title: "2 mile walk around the park",
    description: "Morning walk around the park, bring your dogs!",
    activity_date: "March 30, 2018",
    location: "John D. Morgan Park",
    image: "Insert Image",
  },
  {
    title: "Hiking in the mountains",
    description: "Sunday morning hike!",
    activity_date: "November 30, 2018",
    location: "Morgan Hills Park",
    image: "Insert Image",
  },

  {
    title: "Fun swimming day",
    description: "Don't forget your towels",
    activity_date: "March 30, 2018",
    location: "Community club center",
    image: "Insert Image",
  },
  {
    title: "Yoga day",
    description: "Under the sunny beach..",
    activity_date: "March 30, 2018",
    location: "Santa Cruz beach",
    image: "Insert Image",
  },
];

const seedBlog = () => Activity.bulkCreate(activityData);

module.exports = seedBlog;
