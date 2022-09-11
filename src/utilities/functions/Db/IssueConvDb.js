import DB from "./db-adapter"

class issueConvDB {

    constructor(dbName) {
        this.dbName = 'issue-conversations'
        this.db = new DB(this.dbName);
    }

    getConversation(issueId) {
        const allconvs = this.db.getValue();
        const reqConv = allconvs.find((conv) => conv.issueId = issueId);
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                resolve(reqConv);
            }, 2000)
        });        
    }

    addNewActivity(issueId, activity) {
        const allconvs = this.db.getValue();
        for(const conv of allconvs) {
            if (conv.issueId === issueId) {
                conv.activities.push(activity);
                this.db.setValue(allconvs);
                break;
            }
        }
        return new Promise((resolve , reject) => {
            resolve(true);
        });
    }

    addNewComment(issueId, comment) {
        const allconvs = this.db.getValue();
        for(const conv of allconvs) {
            if (conv.issueId === issueId) {
                conv.comments.push(comment);
                this.db.setValue(allconvs);
                break;
            }
        }
        return new Promise((resolve , reject) => {
            resolve(true);
        });
    }

}

export default new issueConvDB('issue-conversation');