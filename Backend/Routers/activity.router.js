const express = require('express');
const activityRouter = express.Router();
const activityService = require('../services/activity.service');


activityRouter.get('/issueactivity', activityService.getAllActivities);

activityRouter.post('/newactivity', activityService.addNewActivity);

module.exports = activityRouter;