import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import IssueList from "./Issue-List";

function Home() {
    const navigate = useNavigate();

    const goToNewIssue = () => {
        navigate('/issue-type-select');
    }

    return (
        <>
        <Button onClick={goToNewIssue}  label="New issue"/>
            <IssueList />
        </>
    )
}

export default Home;