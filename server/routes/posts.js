const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
});

// POST a new post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

module.exports = router;