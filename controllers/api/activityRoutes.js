const router = require("express").Router();
const { Activity, User, Attendance } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");

//get all activities
router.get("/", async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const activity = activityData.get({ plain: true });

    res.render("activity", {
      ...activity,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//add activity
router.post("/", async (req, res) => {
  try {
    const newActivity = await Activity.create({
      ...req.body,
      activity_date: Date(),
      user_id: req.session.user_id,
    });
    res.status(200).json(newActivity);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//add a new attendace
router.post("/:id", withAuth, async (req, res) => {
  try {
    const attendanceData = await Attendance.create({
      activity_id: req.params.id,
      user_id: req.session.user_id,
    });
    console.log("attendance data", attendanceData);

    if (!attendanceData) {
      res.status(404).json({ message: "No attendance found" });
      return;
    }
    res.status(200).json(attendanceData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const activityData = await Activity.destroy({
      where: {
        id: req.params.id,
      },
    });

    console.log("test delete", req.session.user_id);

    if (!activityData) {
      res.status(404).json({ message: "No activity found with this id!" });
      return;
    }

    res.status(200).json(activityData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
