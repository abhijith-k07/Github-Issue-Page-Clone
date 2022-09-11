import React, { useState } from "react";
import Section from "./Section";
import Label from './Label';
import styles from "./styles/side-panel.module.css";
import LabelEditMenu from "./Label-Edit-Menu";

function SidePanel({ Assigneess, labels }) {
    const [issueLabels, setIssueLabels] = useState([]);

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
            <Section heading="Labels" editMenu={<LabelEditMenu labelAdded={newLabelAdded} /> }>
                    <div className={styles['labels']}>
                        {issueLabels?.length > 0 && issueLabels?.map((label, index) => {
                            return <Label name={label.name} key={index} />
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