// server/app.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const postRoutes = require('./routes/posts');
const projectRoutes = require('./routes/projects');

app.use('/api/posts', postRoutes);
app.use('/api/projects', projectRoutes);

// Start server
app.listen(PORT, () => {
    console.log('🚀 Server running on http://localhost:${PORT}');
});