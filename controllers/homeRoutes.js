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
    const activities = dBActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    console.log("check activites", activities);

    // Pass serialized data and session flag into template
    res.render("homepage", {
      activities,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
