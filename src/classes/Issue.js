import { v4 as uuidv4 } from 'uuid';

export default class Issue {

    constructor({ title, description, errorMessage, codeSnippet, issueTypeId, labels }) {
        this.title = title;
        this.description = description;
        this.errorMessage = errorMessage;
        this.codeSnippet = codeSnippet;
        this.issueTypeId = issueTypeId;
        this.id = uuidv4();
        this.comments = [];
        this.labels = labels ? labels : [];
        this.raisedAt = new Date().toUTCString();
        this.raisedBy = 'Abhijith'
        this.status = 'open'
        this.issueNumber = this.findIssueNumber();
    }


    findIssueNumber() {
        let issues = localStorage.getItem('issue');
        issues = JSON.parse(issues);
        let lastId = issues[0] && issues[0].issueNumber ? issues[0].issueNumber : 1;
        issues.forEach((issue) => {
            if (issue.id > lastId) lastId = issue.issueNumber;
        });
        return Number(lastId) + 1;
    }
}