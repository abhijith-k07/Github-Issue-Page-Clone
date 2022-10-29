const sequelize = require('../connections/dbConnection');
const issueTable = require('../models/Issue.db.model');


const issueController = {};

issueController.getAllIssues = async function () {
    const allIsues = await issueTable.findAll({
        raw: true
    });
    return allIsues;
}


issueController.addIssue = async function (newIssue) {
    try {
        const createdIssue = await issueTable.create(newIssue);
        return createdIssue.dataValues.id;
        return true;
    } catch (err) {
        console.log(err);
    }
}

issueController.getIssueDetail = async (issueId) => {
    try {
        const requiredIssue = await issueTable.findAll({
            raw: true,
            where: { id: issueId }
        });
        return requiredIssue[0];
    } catch (err) {
        throw err;
    }
}

issueController.changeIssueStatus = async (issueId, status) => {
    try {
        await issueTable.update({ status: status }, {
            where: {
                id: issueId
            }
        });
        return true;
    } catch (err) {
        console.log(err);
    }
}

issueController.addLabel = async (label, issueId) => {
    try {
        const issue = await issueTable.findAll({
            where: {
                id: issueId
            }
        });
        const currentLabels = issue[0].dataValues.labels;
        const modifiedLables = currentLabels ? currentLabels + ';' + label : label;
        await issueTable.update({ labels: modifiedLables },
            {
                where: {
                    id: issueId
                }
            });
        return true;
    } catch (err) {
        console.log(err);
    }
}


module.exports = issueController;