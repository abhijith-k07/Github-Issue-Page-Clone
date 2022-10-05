const commentsTable = require("../models/comments.db.model");

const commentsController = {};

commentsController.addComment = async (commentDetails) => {
    try {
        await commentsTable.create(commentDetails);
        return true;
    } catch(err) {
        console.log(err);
    }
}

commentsController.getComments = async (issueId) => {
    try {
        const issueComments =   await commentsTable.findAll({
            attributes: ["comment", "createdAt", "commentedBy"],
            where: {
                issueId
            }
        });
        return issueComments;
    } catch(err) {
        
    }
}


module.exports = commentsController;