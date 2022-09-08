import React from "react";
import ActivityModel from "../classes/ActiviyModel";
import { timeAgo } from "../utilities/functions/timeAgo";
import Icon from "./Icon";
import styles from './styles/conversation-activity.module.css';

function ConversationActivity({ activityBy, activityName, activityAt }) {

    return (
        <>
            <div className={styles['conv-activity']}>
                <div className={styles['conv-icon']}>
                    <span className={styles['activity-icon']}>
                        <Icon name="person" />
                    </span>
                </div>
                <div className={styles['conv-description']}>
                    <span>{activityBy} </span>
                    <span>{`${activityName} ${timeAgo(activityAt)}`}</span>
                </div>

            </div>
        </>
    );
};

export default ConversationActivity