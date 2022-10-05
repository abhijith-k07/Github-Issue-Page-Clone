const commentsController = require("../controllers/comments.controller");
const Comment = require("./models/comment.model");

const commentsService = {};


commentsService.addNewComment = async (req, res, next) => {
    try {
        const {comment, issueId} = req.body;
        await commentsController.addComment(new Comment("abhi-2022", comment, issueId));
        res.status(200).json({msg: "success"});
    } catch (err) {
        next(err);
    }

}


commentsService.getAllComments = async (req, res, next) => {
    try {
        const { issueId } = req.query
        const allComments = await commentsController.getComments(issueId);
        res.status(200).json(allComments);
    } catch (err) {
        next(err);
    }   

}

module.exports = commentsService;