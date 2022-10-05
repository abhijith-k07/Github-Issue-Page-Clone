class IssueModel {

    constructor({ id, labels, status, title, issueNumber, createdAt, raisedBy, issueTypeId, description }) {
        this.id = id;
        this.labels = labels;
        this.status = status;
        this.title = title;
        this.issueNumber = issueNumber;
        this.raisedAt = createdAt;
        this.raisedBy = raisedBy;
        this.issueTypeId = issueTypeId;
        this.description = description;
    }
}

export default IssueModel;