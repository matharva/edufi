const express = require('express');
const router = express.Router();
const {
  getAllMeetings,
  getMeeting,
  addMeeting,
  updateMeeting,
  deleteMeeting,
} = require('../controllers/meeting');

router.route('/').get(getAllMeetings).post(addMeeting);
router.route('/:id').get(getMeeting).patch(updateMeeting).delete(deleteMeeting);

module.exports = router;
