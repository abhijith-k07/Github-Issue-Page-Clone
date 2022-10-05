import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { timeAgo } from "../utilities/functions/timeAgo";
import styles from './styles/issue-card.module.css';
import Label from "./Label";


function IssueCard({ title, labels, openedBy, openedAt, issueNumer, issueId }) {
    const navigate = useNavigate();

    const navigateToConversation = () => {
        navigate(
            {
                pathname: '/issue-conversation',
                search: `?${createSearchParams({ issueId })}`
            }
        );
    }

    return (
        <>
            <div className={styles['issue-card']}>
                <div className={styles['list-indicator']}>
                    <div></div>
                </div>
                <div className={styles['issue-details']} onClick={navigateToConversation} >
                    <div className={styles['issue-box']}>
                        <span className={styles['issue-title']}>{title}</span>
                         {labels?.length > 0 && labels.map((tag, index) => {
                            return <Label key={index} name={tag} />
                        })}
                    </div>
                    <div className={styles['issue-info']}>
                        <span>{`#${issueNumer} opened ${timeAgo(openedAt)} by ${openedBy}`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IssueCard;