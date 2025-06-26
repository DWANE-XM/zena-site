// server/models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    technologies: [String],
    link: String,
    github: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);