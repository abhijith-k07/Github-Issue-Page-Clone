class IssueConversation {
    constructor({issueId, comments, activities}) {
        this.issueId = issueId;
        this.comments = comments ? comments : [];
        this.activities = activities ? activities : [];
    }
}

export default IssueConversation;