const router = require("express").Router();
const { Trip, Activities } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    const tripNormalize = newTrip.get({ plain: true });
    const newActivity = await Activities.create({
      ...req.body,
      trip_id: tripNormalize.id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
