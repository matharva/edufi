const express = require('express');
const router = express.Router();
const {
  getAllClassrooms,
  getClassroom,
  addClassroom,
  updateClassroom,
  deleteClassroom,
  getClassroomForStudent,
  getClassroomForTeacher,
} = require('../controllers/classroom');

router.route('/').get(getAllClassrooms).post(addClassroom);
router
  .route('/:id')
  .get(getClassroom)
  .patch(updateClassroom)
  .delete(deleteClassroom);
router.route('/student/:studentId').get(getClassroomForStudent);
router.route('/teacher/:teacherId').get(getClassroomForTeacher);

module.exports = router;
