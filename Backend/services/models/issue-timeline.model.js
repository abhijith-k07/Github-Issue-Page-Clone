class IssueTimeLine {
    constructor({ issueId }) {
        this.issueId = issueId;
        this.activities = [];
        this.comments = [];
    }
}

module.exports = IssueTimeLine;