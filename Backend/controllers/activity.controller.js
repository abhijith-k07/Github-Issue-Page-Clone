const activityTable = require("../models/activity.db.model");

const activityController = {};

activityController.addNewActivity = async (activityDetails) => {
    try {
        await activityTable.create(activityDetails);
        
        return true;
    } catch(err) {
        console.log(err);
    }
}

activityController.getActivities = async (issueId) => {
    try {
        const allActivities = activityTable.findAll({
            where: {
                issueId
                }
        });
        return allActivities;
    } catch(err) {

    }
}


 module.exports = activityController;