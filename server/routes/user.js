const express = require('express');
const router = express.Router();
const { getAllTeachers, getAllStudents } = require('../controllers/user');

router.route('/students').get(getAllStudents);
router.route('/teachers').get(getAllTeachers);

module.exports = router;
