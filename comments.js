// Create web server
var express = require('express');
var router = express.Router();

// Import database
var db = require('../models');

// Import middleware
var middleware = require('../middleware');

// Import controller
var commentController = require('../controllers/comments');

// Create comment
router.post('/campgrounds/:id/comments', middleware.isLoggedIn, commentController.createComment);

// Edit comment
router.get('/campgrounds/:id/comments/:comment_id/edit', middleware.checkCommentOwnership, commentController.editComment);

// Update comment
router.put('/campgrounds/:id/comments/:comment_id', middleware.checkCommentOwnership, commentController.updateComment);

// Delete comment
router.delete('/campgrounds/:id/comments/:comment_id', middleware.checkCommentOwnership, commentController.deleteComment);

// Export module
module.exports = router;