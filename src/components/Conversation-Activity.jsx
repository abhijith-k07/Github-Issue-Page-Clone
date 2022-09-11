import React from "react";
import { timeAgo } from "../utilities/functions/timeAgo";
import ActivityIcon from "./Activity-Icon";
import styles from './styles/conversation-activity.module.css';

function ConversationActivity({ activityBy, activityName, activityAt }) {

    return (
        <>
            <div className={styles['conv-activity']}>
                <div className={styles['conv-icon']}>
                    <ActivityIcon activityName={activityName} />
                </div>
                <div className={styles['conv-description']}>
                    <span>{activityBy} </span>
                    <span>{`${activityName} this issue ${timeAgo(activityAt)}`}</span>
                </div>

            </div>
        </>
    );
};

export default ConversationActivity