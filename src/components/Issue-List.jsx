import React from "react";
import { useState, useEffect } from "react";
import IssueCard from "./Issue-Card";
import IssueListHeader from "./Issue-List-Header";
import styles from './styles/issue-list.module.css';
import { getRequest } from "../utilities/functions/Http-client";
import IssueModel from "../classes/IssueModel";
import Loader from './Loader';


function IssueList() {
    const [issues, setIssues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getRequest('issue/allissues').then((response) => {
            const formattedIssues = response.data.map((issue) => new IssueModel({ ...issue, title: issue.title }));
            formattedIssues.sort((a, b) => {
                if (new Date(a.raisedAt) < new Date(b.raisedAt)) return 1;
                else if (new Date(a.raisedAt) < new Date(b.raisedAt)) return -1;
                else return 0;
            });
            setIssues(formattedIssues);
            setIsLoading(false);
        })
    }, [])


    return (

        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <div >
                    <IssueListHeader allIssues={issues} />
                </div>
                <div className={styles['issue-cards']} >
                    {isLoading && <Loader loaderText={'loading issues...'} />}
                    {
                        (issues && issues?.length > 0) && issues?.map((issue) => {
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