import React, { useEffect, useState } from 'react';
import Box from './Box';
import Input from './Input';
import styles from './styles/new-issue.module.css';
import TextBox from './Text-Box';
import Button from './Button';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom'
import Issue from '../classes/Issue';
import { postRequest } from '../utilities/functions/Http-client';


function NewIssue() {
    const [searchParams] = useSearchParams();
    const [issue, setIssue] = useState({
        title: '',
        description: ''
    });
    const [issueTypeDetails, setIssueTypeDetails] = useState({});
    const [errorMessage, setErrorMessage] = useState("");



    const issueTypeId = searchParams.get('issueTypeId');
    const navigate = useNavigate();

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
        setErrorMessage("");
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
            const newIssue = new Issue({ ...issue, issueTypeId });
            postRequest('issue/newissue', newIssue).then((createdIssue) => {

                navigate({
                        pathname: '/issue-conversation',
                        search: `?${createSearchParams({ issueId: createdIssue.data.issueId })}`
                    });
            });
        } else {
            setErrorMessage("All fields are required");
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
                    {errorMessage && <div className="text-danger mt-10">{errorMessage}</div>}
                    <Button label="Submit new Issue" panelClasses={styles['margin-left-auto']} onClick={submitForm} />
                </div>
            </Box>
        </div>
    );

}

export default NewIssue;