import React, { useState, useEffect } from 'react';
import styles from './styles/issue-list-header.module.css';
import issueCardStyles from './styles/issue-card.module.css';

function IssueListHeader({ allIssues }) {
    const [statCounts, setStatCounts] = useState({ open: 0, closed: 0 });

    useEffect(() => {
        const stats = {
            open: 0,
            closed: 0
        }
        allIssues.forEach((issue) => {
            if (issue.status === 'open') stats['open']++;
            else stats['closed']++;
            setStatCounts(stats);
        })
    }, [])


    return (
        <>
            <div className={styles['issue-list-header']}>
                <div className={styles['issue-list-summary']}>
                    <div className={styles['issue-open']}>
                        <div className={issueCardStyles['list-indicator']}>
                            <div></div>
                        </div>
                        <span>{statCounts.open} Open</span>
                    </div>
                    <div className='text-semi-grey'>{statCounts.closed} Closed </div>
                </div>
                {/* <div className={styles['issue-filters']}>
                    <div>Author</div>
                    <div>Label</div>
                    <div>Assignee</div>
                    <div>Sort</div>
                </div> */}

            </div>
        </>
    )
}

export default IssueListHeader;