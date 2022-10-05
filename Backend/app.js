require('dotenv').config()
const express = require('express');
const { connectToDb } = require('./connections/dbConnection');
const bodyParser = require('body-parser');
const cors = require('cors');

const issueRouter = require('./Routers/issue.router');
const commentsRouter = require('./Routers/comments.router');
const activityRouter = require('./Routers/activity.router');

const app = express();
connectToDb();

// Library Initiaizations
app.use(cors(
    {
        origin: 'http://localhost:3000',
        allowedHeaders : ['Access-Control-Allow-Credentials', 'Content-Type'],
        credentials: true
    }
));
app.use(bodyParser.json());


// Appication routes
app.use('/issue', issueRouter);
app.use('/comments', commentsRouter);
app.use('/activity', activityRouter);



app.listen(process.env.PORT, () => { console.log('app running on PORT' + process.env.PORT); });
