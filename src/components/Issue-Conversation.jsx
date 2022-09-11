import React, { useEffect, useState } from "react";
import styles from './styles/issue-conversation.module.css';
import ConversationHeader from "./Conersation-Header";
import ConversationActivity from "./Conversation-Activity";
import TextBox from "./Text-Box";
import Button from './Button';
import { useSearchParams } from 'react-router-dom';
import SidePanel from "./Side-Panel";
import ActivityModel from "../classes/ActiviyModel";
import CommentModel from "../classes/Comment";
import Comment from './Comment';
import { getRequest, postRequest } from "../utilities/functions/Http-client";
import IssueModel from "../classes/IssueModel";

function IssueConversation() {
    const [timeLine, setTimeLine] = useState([]);
    const [issue, setIssue] = useState(null);
    const [currentComment, setCurrentComment] = useState('');

    const [searchParams] = useSearchParams();

    const issueId = searchParams.get('issueId');

    const sortCommentsAndActivities = (comments, activities) => {
        comments.sort(comparisonFunc);
        activities.sort(comparisonFunc);
        const timeLine = new Array(activities.length + comments.length);
        let [i, j, k] = [0, 0, 0];
        while (i < activities.length + comments.length) {
            if (j >= activities.length) timeLine[i] = comments[k++];
            else if (k >= comments.length) timeLine[i] = (activities[j++]);
            else if (new Date(activities[j].at) < new Date(comments[k].at)) timeLine[i] = activities[j++];
            else timeLine[i] = comments[k++];
            i++;
        }
        setTimeLine(timeLine);
    }

    const comparisonFunc = (a, b) => {
        if (new Date(a.at) < new Date(b.at)) return -1;
        else if (new Date(a.at) > new Date(b.at)) return 1;
        else return 0;
    }

    const getIssue = (issueId) => {
        getRequest('issue/issuedetails/' + issueId).then((response) => {
            setIssue(new IssueModel({...response.data[0]}));
            console.log(issue);
        });
    }

    useEffect(() => {
        getIssue(issueId);
        Promise.all([getRequest('activity/issueactivity/?issueId=' + issueId), getRequest('comments/issuecomments/?issueId=' + issueId)]).then((response) => {
            const formattedActicities = response[0].data.map((activity) => new ActivityModel(activity.activityBy, activity.createdAt, activity.activity));
            const formattedComments = response[1].data.map((comment) => new CommentModel(comment.commentedBy, comment.createdAt, comment.comment));
            sortCommentsAndActivities(formattedComments, formattedActicities);
        });
    }, []);


    const handleComment = (e) => {
        setCurrentComment(e.target.value);
    }

    const addComment = () => {
        const payload = {
            issueId,
            comment: currentComment
        }
        const newComment = new CommentModel('Abhijith',new Date() , currentComment);
        postRequest('comments/newcomment', payload).then(() => {
            setTimeLine([...timeLine, newComment]);
            setCurrentComment('');
        })
    };

    const closeIssue = () => {
        const payload = {
            activity: "Closed this",
            issueId
        }
        postRequest('activity/newactivity', payload).then(() => {
            const closeActivity = new ActivityModel('Abhijith', new Date().toISOString(), 'Closed this');
            setIssue({ ...issue, status: 'closed' });
            setTimeLine([...timeLine, closeActivity]);
        });
    }

    const reOpenIssue = () => {
        const payload = {
            activity: "Reopened this",
            issueId
        }
        postRequest('activity/newactivity', payload).then(() => {
            const reopenActivity = new ActivityModel('Abhijith', new Date().toISOString(), 'Reopened this');
            setIssue({ ...issue, status: 'open' });
            setTimeLine([...timeLine, reopenActivity]);
        });
    }

    return (    
        <>
            <div className={styles['main-wrapper']}>
                <div className={styles['conv-wrapper']}>
                    <div className={styles['conv-container']}>
                        <div>
                            <ConversationHeader
                                title={issue?.title}
                                status={issue?.status}
                                issueNumber={issue?.issueNumber ? issue.issueNumber : 0}
                                openedBy={issue?.raisedBy}
                                openedAt={issue?.raisedAt}
                            />
                        </div>
                        <div>

                        </div>
                        <div>
                            <Comment commentedBy={issue?.raisedBy} commentedAt={issue?.raisedAt} comment={issue?.description} />
                            {timeLine.length && timeLine?.map((timeLineItem, index) => {
                                if (timeLineItem.type === "comment") {
                                    return <Comment key={index} commentedBy={timeLineItem.commentedBy} commentedAt={timeLineItem.at} comment={timeLineItem.comment} />
                                }
                                else return <ConversationActivity key={index} activityAt={timeLineItem.at} activityBy={timeLineItem.activityBy} activityName={timeLineItem.activityName} />
                            })}
                        </div>
                        <div>
                            {issue?.status === 'open' && <TextBox onChange={handleComment} label="comment" value={currentComment} />}
                        </div>
                        <div>
                            {issue?.status === 'open' && <Button label="Close issue" onClick={closeIssue} />}
                            {issue?.status === 'open' && <Button label="comment" onClick={addComment} />}
                            {issue?.status === 'closed' && <Button label="Reopen" onClick={reOpenIssue} />}
                        </div>
                    </div>
                </div>
                <div className={styles['panel-wrapper']}>
                    {issue && <SidePanel labels={issue.labels} />}
                </div>
            </div>
        </>
    )
}



export default IssueConversation;