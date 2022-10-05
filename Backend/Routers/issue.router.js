const express = require('express');
const issueRouter = express.Router();
const issuService = require('../services/issue.service');

issueRouter.get('/allissues', issuService.getAllIssues);

issueRouter.get('/issuedetails/:issueId', issuService.getIssueDetail);

issueRouter.post('/newissue', issuService.addNewIssue);

issueRouter.put('/labels', issuService.addLabel);

module.exports = issueRouter;