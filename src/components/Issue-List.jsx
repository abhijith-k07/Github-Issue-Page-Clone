import React from "react";
import { useState, useEffect } from "react";
import IssueCard from "./Issue-Card";
import IssueListHeader from "./Issue-List-Header";
import styles from './styles/issue-list.module.css';
import IssueDb from "../utilities/functions/Db/IssueDb";
import { getRequest } from "../utilities/functions/Http-client";
import IssueModel from "../classes/IssueModel";

function IssueList() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        getRequest('issue/allissues').then((response) => {
            const formattedIssues = response.data.map((issue) => new IssueModel({...issue}));
            setIssues(formattedIssues);
        })
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