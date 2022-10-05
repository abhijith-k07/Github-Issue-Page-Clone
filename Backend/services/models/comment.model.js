class Comment {
    constructor(by, comment, issueId) {
        this.comment = comment; 
        this.commentedBy = by;
        this.commentedAt = new Date().toUTCString();
        this.issueId = issueId;
    }
}

module.exports = Comment;