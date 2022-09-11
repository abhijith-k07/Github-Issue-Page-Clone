class CommentModel {
    constructor(by, at, comment) {
        this.comment = comment; 
        this.commentedBy = by;
        this.type = "comment";
        this.at = at;
    }
}

export default CommentModel;