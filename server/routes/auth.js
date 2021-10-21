const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

/**
 * @desc    Auth with google
 * @route   GET /auth/google
 */
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

/**
 * @desc    google auth callback
 * @route   GET /auth/google/callback
 */
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/,',
  }),
  (_req, res) => {
    console.log(res);
    res.send("ok");
  },
);

/**
 * @desc    Logout
 * @route   GET /auth/logout
 */
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/usersList', function (req, res) {
  console.log('In all users route');

  User.find({}, function (err, users) {
    var userMap = {};

    users.forEach(function (user) {
      userMap[user._id] = user;
    });

    res.send(userMap);
  });
});

module.exports = router;
