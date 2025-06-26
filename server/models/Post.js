// server/models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    imageUrl: String,
    videoUrl: String,
    tags: [String],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);