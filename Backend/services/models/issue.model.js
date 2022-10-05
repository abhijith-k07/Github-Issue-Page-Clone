const { v4: uuidv4 } = require('uuid');

class Issue {
    constructor({title, description, labels, raisedBy}) {
        this.title = title;
        this.description = description;
        this.labels = labels ? labels : [];
        this.id = uuidv4();
        this.raisedBy = raisedBy;
        this.issueNumber = 1;
        this.status = 'open';
        this.issueTypeId = uuidv4();
    }
}

module.exports = Issue;