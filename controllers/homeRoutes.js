const router = require("express").Router();
const { Activity, User, Attendance } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");

// GET all activities
router.get("/", async (req, res) => {
  try {
    const dBActivityData = await Activity.findAll({
      include: [
        {
          model: User,
          through: Attendance,
          as: "activity_attendances",
        },
      ],
    });

    const activities = dBActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    //find if user is in the attendance list
    activities.forEach((activity) => {
      if (
        //if we didn't find the user in attendance list
        !activity.activity_attendances.find(
          (a) => a.attendance.user_id === req.session.user_id
        )
      ) {
        //assign a notAttended to true
        activity.notAttended = true;
      }
    });
    // Pass serialized data and session flag into template
    res.render("homepage", {
      activities,
      logged_in: req.session.user_id,
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

//get activity by id
router.get("/activity/:id", withAuth, async (req, res) => {
  try {
    const dBActivityData = await Activity.findByPk(req.params.id, {
      include: [
        {
          model: User,
          through: {
            Attendance,
          },
          as: "activity_attendances",
        },
      ],
    });

    const activity = dBActivityData.get({ plain: true });
    console.log("test single activity", activity.activity_attendances.name);

    res.render("singleactivity", {
      activity,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get activity by username
router.get("/activity", withAuth, async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      attributes: { exclude: ["password"] },

      include: [
        {
          model: User,
          through: {
            Attendance,
            where: {
              user_id: {
                [Op.eq]: req.session.user_id,
              },
            },
          },
          as: "activity_attendances",
        },
      ],
    });

    // Serialize data so the template can read it
    const activities = activityData.map((activity) =>
      activity.get({ plain: true })
    );

    console.log("check activities for signed in user here", activities);
    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const user = userData.get({ plain: true });

    res.render("activity", {
      activities,
      user,
      logged_in: req.session.user_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
