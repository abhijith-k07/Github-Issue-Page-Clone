import DB from "./db-adapter";

class IssueDb {
    constructor() {
        this.dbName = 'issue';
        this.db = new DB(this.dbName);
    }

    getIssues() {
        const issues = this.db.getValue();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(issues);
            })
        });
    }

    getIssue(issueId) {
        const issuesFromDb = this.db.getValue();
        const reqIssue = issuesFromDb.filter(issue => issue.id === issueId);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(reqIssue[0]);
            }, 1000)
        })

    }

    addNewIssue(newIssue) {
        const issuesFromDb = this.db.getValue();
        issuesFromDb.push(newIssue);
        this.db.setValue(issuesFromDb);
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }

    changeStatus(issueId, status) {
        const issuesFromDb = this.db.getValue();
        const reqIssue = issuesFromDb.find((issue) => issue.id === issueId);
        reqIssue.status = status;
        this.db.setValue(issuesFromDb);
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
        
}

export default new IssueDb();