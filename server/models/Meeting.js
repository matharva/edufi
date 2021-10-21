const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: Date,
    required: true,
  },
  //   FK to teacherId, here add all the users and filter using the isTeacher field
  // FK to classroomId
});

module.exports = mongoose.model('Meeting', MeetingSchema);
