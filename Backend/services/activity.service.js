const activityController = require("../controllers/activity.controller");
const issueService = require("./issue.service");
const Activity = require("./models/actiivity.model");


const activityService = {};

activityService.addNewActivity = async (req, res, next) => {
    try {
        const {activity, issueId} = req.body;
        await activityController.addNewActivity(new Activity("abhi-2022",activity, issueId));
        let issueStatus;
        if (activity === 'closed') issueStatus = 'closed';
        else if (activity === 'reopened') issueStatus = 'open';
        await issueService.changeStatus(issueStatus, issueId);
        res.json({msg:"success"});
    } catch (err) {
        next(err);
    }

}

activityService.getAllActivities = async (req, res, next) => {
    try {
        const { issueId } = req.query;
        const allActivities = await activityController.getActivities(issueId);
        res.status(200).json(allActivities);
    } catch (err) {
        next(err);
    }

}

module.exports = activityService;