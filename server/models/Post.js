const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  links: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
  },
  isAssignment: {
    type: Boolean,
    default: false,
  },
  //   FK to teacherId, here add all the users and filter using the isTeacher field
  // FK to classroomId
});

module.exports = mongoose.model('Post', PostSchema);
