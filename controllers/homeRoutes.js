const router = require("express").Router();
const { Activity, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all activities
router.get("/", async (req, res) => {
  try {
    const dBActivityData = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const activity = dBActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (res, req) => {
  if (req.session.logged_in) {
    console.log("logged in");
  }
  console.log("send to login page");
});

module.exports = router;
