const issueController = require('../controllers/issue.controller');
const issueDb = require('../controllers/issue.controller');
const Issue = require('./models/issue.model');

const issueService = {};

issueService.getAllIssues = async function (req, res, next) {
    let allIssues = await issueController.getAllIssues();
    allIssues = allIssues.map((issue) => {
        return {
            ...issue, labels: issue.labels ? issue.labels.split(";") : []
            }
    })
    res.json(allIssues);
}

issueService.addNewIssue = async function (req, res, next) {
    try {
        const { title, description, labels } = req.body;
        const newIssue = new Issue({ title, description, labels, raisedBy: "abhi-2022" });
        const newIssueId = await issueController.addIssue(newIssue);
        res.json({ issueId: newIssueId });
    } catch (err) {
        next(err);
    }
}

issueService.getIssueDetail = async (req, res, next) => {
    try {
        const issueId = req.params.issueId;
        const issue = await issueController.getIssueDetail(issueId);
        console.log(issue);
        issue.labels = issue.labels ? issue.labels.split(";") : [];
        res.status(200).json(issue);
    } catch (err) {
        next(err);
    }
}

issueService.changeStatus = async (newStatus, issuedId) => {
    try {
        await issueController.changeIssueStatus(issuedId, newStatus);
        res.status(200).json({ msg: "success" });
    } catch (err) {
        // next(err);
    }
}

issueService.addLabel = async (req, res, next) => {
    try {
        const { issueId, label } = req.body;
        console.log(label);
        await issueController.addLabel(label, issueId);
        res.status(200).json({ msg: "success" });
    } catch (err) {
        next(err);
    }
}

module.exports = issueService;