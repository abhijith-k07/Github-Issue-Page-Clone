const express = require('express');
const commentsRouter = express.Router();
const commentsService = require('../services/comments.service');


commentsRouter.get('/issuecomments', commentsService.getAllComments);

commentsRouter.post('/newcomment', commentsService.addNewComment);

module.exports = commentsRouter;