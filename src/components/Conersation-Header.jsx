import React, { useEffect } from "react";
import { timeAgo } from "../utilities/functions/timeAgo";
import styles from './styles/conversation-header.module.css';

function ConversationHeader({ title, issueNumber, status, openedBy, openedAt }) {
    
    useEffect(() => {
        
    }, [status])

    return (
        <>
            <div className={styles['conv-header']}>
                <div className={styles['conv-title']}>
                    <div>{title}</div>
                    <span>#{issueNumber}</span>
                </div>
                <div className={styles['conv-sub-header']}>
                    <div className={styles['issue-status']} style={{backgroundColor: status === 'open'? 'green': 'orange'}}>{status}</div>
                    <div>{`${openedBy} opened this issue ${timeAgo(openedAt)}`}</div>
                </div>
            </div>
        </>
    );

}

export default ConversationHeader;