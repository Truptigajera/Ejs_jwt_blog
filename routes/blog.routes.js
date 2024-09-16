const express = require('express');

const { showBlogPage,
    addBlog
} = require('../controller/blog.controller');
const blogRoutes = express.Router();
const {verifyToken} = require('../middleware/auth');  // Import authentication middleware


blogRoutes.get("/", showBlogPage);
blogRoutes.post("/", addBlog);
module.exports = blogRoutes;