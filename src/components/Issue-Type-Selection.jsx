import React, {useEffect, useState} from "react";
import Box from "./Box";
import Button from "./Button";
import styles from './styles/issue-type-selection.module.css';
import { useNavigate, createSearchParams } from 'react-router-dom';


function IssueTypeSelection() {
    const navigate = useNavigate();
    const [issueTypes, setIssueTypes] = useState([]);

    useEffect(() => {
        const issueTypesFromDb = localStorage.getItem('issueTypes');
        setIssueTypes(JSON.parse(issueTypesFromDb));
    }, []);

    const goToNewIssue = (issueId) => {
        navigate({
            pathname: '/new-issue',
            search: `?${createSearchParams({ issueId })}`,
        });
    }

    return (
        <>
            <div className={styles['box-center']}>
                <Box>
                    {issueTypes?.map((issue) => {
                        return <div className={styles['issue-type-selection']} >
                            <div className={styles['issue-type']}>
                                <div>{issue.title}</div>
                                <div>{issue.description} </div>
                            </div>
                            <Button label="Get Started" onClick={() => { goToNewIssue(issue.id) }} />
                        </div>
                    })}
                </Box>
            </div>
        </>
    )
}

export default IssueTypeSelection;
