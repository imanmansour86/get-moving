const { Activity } = require("../models");

const activityData = [
  {
    title: "2 mile walk around the park",
    description: "Morning walk around the park, bring your dogs!",
    activity_date: "March 30, 2022",
    location: "John D. Morgan Park",
    image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    user_id: 1,
  },
  {
    title: "Hiking in the mountains",
    description: "Sunday morning hike!",
    activity_date: "November 30, 2022",
    location: "Morgan Hills Park",
    image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    user_id: 1,
  },

  {
    title: "Fun swimming day",
    description: "Don't forget your towels",
    activity_date: "March 30, 2022",
    location: "Community club center",
    image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    user_id: 2,
  },
  {
    title: "Yoga day",
    description: "Under the sunny beach..",
    activity_date: "March 30, 2022",
    location: "Santa Cruz beach",
    image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    user_id: 3,
  },
];

const seedBlog = () => Activity.bulkCreate(activityData);

module.exports = seedBlog;
