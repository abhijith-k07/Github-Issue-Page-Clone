import React, { useEffect, useState } from "react";
import styles from './styles/issue-conversation.module.css';
import ConversationHeader from "./Conersation-Header";
import Comment from "./Comment";
import ConversationActivity from "./Conversation-Activity";
// import ActivityModel from "../classes/ActiviyModel";
import TextBox from "./Text-Box";
import Button from './Button';
import { useSearchParams } from 'react-router-dom';
import DB from "../utilities/functions/Db/db-adapter";
import SidePanel from "./Side-Panel";
import ActivityModel from "../classes/ActiviyModel";

function IssueConversation() {
    const [conversation, setConversation] = useState(null);
    const [timeLine, setTimeLine] = useState([]);
    const [issue, setIssue] = useState(null);
    const [currentComment, setCurrentComment] = useState('');

    const [searchParams] = useSearchParams();

    const issueId = searchParams.get('issueId');

    const issueDb = new DB('issue');
    const issueConvDb = new DB('issue-conversations');

    const sortCommentsAndActivities = (conversation) => {
        const comments = [...conversation.comments];
        comments.sort(comparisonFunc);
        const activities = [...conversation.activities];
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

    const getConversation = (issueId) => {
        let convFromDb = localStorage.getItem('issue-conversations');
        convFromDb = JSON.parse(convFromDb);
        const targetConv = convFromDb.filter(conv => conv.issueId == issueId);
        return targetConv[0];
    }

    const getIssue = (issueId) => {
        let issuesFromDb = JSON.parse(localStorage.getItem('issue'));
        const reqIssue = issuesFromDb.filter(issue => issue.id === issueId);
        setIssue(reqIssue[0]);
    }

    useEffect(() => {
        let data = getConversation(issueId);
        console.log(data);
        sortCommentsAndActivities(data);
        getIssue(issueId);
        setConversation(data);
    }, []);


    const handleComment = (e) => {
        setCurrentComment(e.target.value);
    }

    const addComment = () => {
        const newComment = {
            type: "comment",
            commentedBy: "Abhijith",
            comment: currentComment,
            at: new Date().toUTCString()
        };

        const newConv = {...conversation, comments: [...conversation.comments, newComment]};
        setCurrentComment('');
        setConversation(newConv);
        sortCommentsAndActivities(newConv);
        const convFromDb = JSON.parse(localStorage.getItem('issue-conversations'));
        for(let conv of convFromDb) {
            if (conv.issueId === newConv.issueId) {
                conv.comments = newConv.comments;
                break;
            }
        }
        localStorage.setItem('issue-conversations', JSON.stringify(convFromDb));
    };

    const comparisonFunc = (a, b) => {
        if (new Date(a.at) < new Date(b.at)) return -1;
        else if (new Date(a.at) > new Date(b.at)) return 1;
        else return 0;
    }

    const closeIssue = () => {
        const issueFromDb = JSON.parse(localStorage.getItem('issue'));
        for(let dbIssue of issueFromDb) {
            if(dbIssue.id === issue.id) dbIssue.status = 'closed';
            setIssue(dbIssue);
            localStorage.setItem('issue', JSON.stringify(issueFromDb));
            break;
        }
        const issueConvFromDb = JSON.parse(localStorage.getItem('issue-conversations'));
        for(const conv of issueConvFromDb) {
            if (conv.issueId === conversation.issueId) {
                conv.activities.push(new ActivityModel('Abhijith', new Date().toISOString(), 'Closed this'));
                console.log(conv);
                setConversation(conv);
                setTimeLine(conv);
                localStorage.setItem('issue-conversations', JSON.stringify(issueConvFromDb));
                break;
            }
        }
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
                            { issue?.status === 'open' && <TextBox onChange={handleComment} label="comment" value={currentComment} />}
                        </div>
                        <div>
                            {issue?.status === 'open'&& <Button label="Close issue" onClick={closeIssue} /> }
                            {issue?.status === 'open' && <Button label="comment" onClick={addComment} />
}
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