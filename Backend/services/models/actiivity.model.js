class Activity {
    constructor(by, activity, issueId) {
        this.activity = activity; 
        this.activityBy = by;
        this.activityAt = new Date().toUTCString();
        this.issueId = issueId;
    }
}

module.exports = Activity;