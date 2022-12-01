const router = require("express").Router();
const userRoute = require("./userRoute");
const tripRoute = require("./tripRoute");

router.use("/users", userRoute);
router.use("/trip", tripRoute);

module.exports = router;
