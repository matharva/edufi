const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getAllPostForClassroom,
  getAllPostForTeacher,
  updatePost,
  deletePost,
  getPost,
  addPost,
} = require('../controllers/post');

router.route('/').get(getAllPosts).post(addPost);
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);
router.route('/classroom/:classroomId').get(getAllPostForClassroom);
router.route('/teacher/:teacherId').get(getAllPostForTeacher);

module.exports = router;
