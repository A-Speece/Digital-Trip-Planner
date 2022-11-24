const router = require('express').Router();
const userRoute = require('./userRoute');
const tripRoute = require('./tripRoute');
const activtiesRoute = require('./activtiesRoute');

router.use('/users', userRoute);
// router.use('/trip', tripRoute);
// router.use('/activties', activtiesRoute);

module.exports = router;
