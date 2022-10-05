const { v4: uuidv4 } = require('uuid');

class Issue {
    constructor({title, description, labels, raisedBy}) {
        this.title = title;
        this.description = description;
        this.labels = labels ? this.formatLabels(labels) : this.formatLabels([]);
        this.id = uuidv4();
        this.raisedBy = raisedBy;
        this.issueNumber = 1;
        this.status = 'open';
        this.issueTypeId = uuidv4();
    }

    
    formatLabels(labels) {
        if (labels.length === 0) return '';
        return labels.reduce((prev, current) => {
            return prev + ';' + current; 
        })
    }
}

module.exports = Issue;