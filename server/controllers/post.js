const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Yeh baaki hai
const getAllPostForClassroom = async (req, res) => {
  try {
    // const post = await Post.findOne({ _id: req.params.classroomId });
    // res.status(200).json({ data: post });
    // Foreign key ka scene hai, mai baadme karta hu yeh
  } catch (error) {
    res.status(500).json({ error });
  }
};

// yeh baaki hai
const getAllPostForTeacher = () => {};

const updatePost = async (req, res) => {
  console.log(`update post with id ${req.params.id}`);
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post)
      return res.status(404).json({ error: `No post with id: ${req.body.id}` });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deletePost = async (req, res) => {
  console.log(`delete post with id ${req.params.id}`);
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    if (!post)
      return res.status(404).json({ error: `No post with id: ${req.body.id}` });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPost = async (req, res) => {
  console.log(`get post with id ${req.params.id}`);
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post)
      return res.status(404).json({ error: `No post with id: ${req.body.id}` });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({ data: newPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllPosts,
  getAllPostForClassroom,
  getAllPostForTeacher,
  updatePost,
  deletePost,
  getPost,
  addPost,
};
