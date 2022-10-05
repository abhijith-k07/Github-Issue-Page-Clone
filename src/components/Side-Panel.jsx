import React, { useState } from "react";
import Section from "./Section";
import Label from './Label';
import styles from "./styles/side-panel.module.css";
import LabelEditMenu from "./Label-Edit-Menu";
import { useEffect } from "react";

function SidePanel({ Assigneess, labels, issueId }) {
    const [issueLabels, setIssueLabels] = useState([]);

    useEffect(() => {
        setIssueLabels(labels);
    }, [labels])

    const newLabelAdded = (addedLabel) => {
        setIssueLabels([...issueLabels, addedLabel]);
    }

    return (
        <div>
            <Section heading="Assignees">
                <div>
                    <div className={styles['content']}>No Assigneess</div>
                </div>
            </Section>
            <Section heading="Labels" editMenu={<LabelEditMenu labelAdded={newLabelAdded} issueId={issueId} /> }>
                    <div className={styles['labels']}>
                        {issueLabels?.length > 0 && issueLabels?.map((label, index) => {
                            return <Label name={label} key={index} />
                        })}
                        <div className={styles['content']}>
                            {issueLabels?.length === 0 ? <span>No labels assigned</span> : null}
                        </div>
                    </div>
            </Section>

        </div>
    );
}

export default SidePanel;