const Meeting = require('../models/Meeting');

const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find({});
    res.status(200).json({ data: meetings });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getMeeting = async (req, res) => {
  console.log(`get post with id ${req.params.id}`);
  try {
    const meeting = await Meeting.findOne({ _id: req.params.id });
    if (!meeting)
      return res
        .status(404)
        .json({ error: `No meeting with id: ${req.body.id}` });
    res.status(200).json({ data: meeting });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const addMeeting = async (req, res) => {
  try {
    const newMeeting = await Meeting.create(req.body);
    res.status(201).json({ data: newMeeting });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updateMeeting = async (req, res) => {
  console.log(`update meeting with id ${req.params.id}`);
  try {
    const meeting = await Meeting.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!meeting)
      return res
        .status(404)
        .json({ error: `No meeting with id: ${req.body.id}` });
    res.status(200).json({ data: meeting });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteMeeting = async (req, res) => {
  console.log(`delete meeting with id ${req.params.id}`);
  try {
    const meeting = await Meeting.findOneAndDelete({ _id: req.params.id });
    if (!meeting)
      return res
        .status(404)
        .json({ error: `No meeting with id: ${req.body.id}` });
    res.status(200).json({ data: meeting });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllMeetings,
  getMeeting,
  addMeeting,
  updateMeeting,
  deleteMeeting,
};
