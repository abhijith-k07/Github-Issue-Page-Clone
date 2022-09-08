import React, { useEffect, useState } from 'react';
import Box from './Box';
import Input from './Input';
import styles from './styles/new-issue.module.css';
import TextBox from './Text-Box';
import Button from './Button';
import { useSearchParams } from 'react-router-dom'
import Issue from '../classes/Issue';
import IssueConversation from '../classes/Issue-Conversation';

function NewIssue() {
    const [searchParams] = useSearchParams();
    const [issue, setIssue] = useState({
        title: '',
        description: '',
        errorMessage: '',
        codeSnippet: '',
    });
    const issueTypeId = searchParams.get('issueId');
    const [issueTypeDetails, setIssueTypeDetails] = useState({});

    useEffect(() => {
        const typeDetails = getIssueTypedetails(issueTypeId);
        setIssueTypeDetails(typeDetails);
    }, []);


    const getIssueTypedetails = (issueTypeId) => {
        let issueTypes = localStorage.getItem('issueTypes');
        issueTypes = JSON.parse(issueTypes);
        const res = issueTypes.filter(issueType => issueType.id === issueTypeId);
        return res[0];
    }


    const handleInput = (e) => {
        setIssue({ ...issue, [e.target.name]: e.target.value, });
    }

    const submitForm = () => {
        let isFormValid = true;
        for (let field in issue) {
            if (issue[field].length === 0) {
                isFormValid = false;
                break;
            }
        }
        if (isFormValid) {
            let db = window.localStorage.getItem('issue');
            const convDb = JSON.parse(window.localStorage.getItem('issue-conversations'));
            if (!db) db = [];
            else db = JSON.parse(db);
            const newIssue = new Issue({ ...issue, issueTypeId });
            convDb.push(new IssueConversation({issueId :newIssue.id}));
            console.log(newIssue);
            db.push(newIssue);
            localStorage.setItem('issue', JSON.stringify(db));
            localStorage.setItem('issue-conversations', JSON.stringify(convDb));
        }
    }

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>Issue: {issueTypeDetails.title}</div>
            <Box>
                <div className={styles['wrapper']}>
                    <Input placeholder="Title" value={issue.title} name="title" onChange={handleInput} />
                    <div className={styles['instructions']}>

                    </div>
                    <TextBox label="Description"
                        subLabel="Please briefly describe your issue"
                        height={8}
                        isMandatory={true}
                        name="description"
                        onChange={handleInput}
                        value={issue.description}
                    />
                    <TextBox label="Error Message"
                        subLabel="Please provide any error message you are receiving and a stack trace."
                        height={8}
                        isMandatory={true}
                        name="errorMessage"
                        onChange={handleInput}
                        value={issue.errorMessage}
                    />
                    <TextBox label="Relevant code snippet"
                        height={9}
                        isMandatory={true}
                        name="codeSnippet"
                        onChange={handleInput}
                        value={issue.codeSnippet}
                    />
                    <Button label="Submit new Issue" panelClasses={styles['margin-left-auto']} onClick={submitForm} />
                </div>
            </Box>
        </div>
    );

}

export default NewIssue;