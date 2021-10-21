const Classroom = require('../models/Classroom');

const getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({});
    res.status(200).json({ data: classrooms });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getClassroom = async (req, res) => {
  console.log(`get classroom with id ${req.params.id}`);
  try {
    const classroom = await Classroom.findOne({ _id: req.params.id });
    if (!classroom)
      return res.status(404).json({ error: `No post with id: ${req.body.id}` });
    res.status(200).json({ data: classroom });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addClassroom = async (req, res) => {
  try {
    const newClassroom = await Classroom.create(req.body);
    res.status(201).json({ data: newClassroom });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateClassroom = async (req, res) => {
  console.log(`update post with id ${req.params.id}`);
  try {
    const classroom = await Classroom.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!classroom)
      return res
        .status(404)
        .json({ error: `No classroom with id: ${req.body.id}` });
    res.status(200).json({ data: classroom });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteClassroom = async (req, res) => {
  console.log(`delete classroom with id ${req.params.id}`);
  try {
    const classroom = await Classroom.findOneAndDelete({ _id: req.params.id });
    if (!classroom)
      return res
        .status(404)
        .json({ error: `No classroom with id: ${req.body.id}` });
    res.status(200).json({ data: classroom });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// yeh baaki hai
const getClassroomForStudent = () => {};

// yeh baaki hai
const getClassroomForTeacher = () => {};

module.exports = {
  getAllClassrooms,
  getClassroom,
  addClassroom,
  updateClassroom,
  deleteClassroom,
  getClassroomForStudent,
  getClassroomForTeacher,
};
