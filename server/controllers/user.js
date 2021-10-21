const User = require('../models/User');

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ isTeacher: true });
    res.status(200).json({ data: teachers });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ isTeacher: false });
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTeachers,
  getAllStudents,
};
