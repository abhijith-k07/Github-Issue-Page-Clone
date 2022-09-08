import React from "react";
import { useState, useEffect } from "react";
import IssueCard from "./Issue-Card";
import IssueListHeader from "./Issue-List-Header";
import styles from './styles/issue-list.module.css';

function IssueList() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const issues = localStorage.getItem('issue');
        setIssues(JSON.parse(issues));
    }, [])


    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <div >
                    <IssueListHeader allIssues={issues} />
                </div>
                <div >
                    {
                        issues.length > 0 && issues?.map((issue) => {
                            return <IssueCard
                                key={issue?.id}
                                title={issue?.title}
                                labels={issue?.labels}
                                openedAt={issue?.raisedAt}
                                openedBy={issue?.raisedBy}
                                issueNumer={issue?.issueNumber}
                                issueId={issue?.id}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default IssueList;