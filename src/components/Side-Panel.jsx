import React, { useEffect } from "react";
import Section from "./Section";
import Label from './Label';
import styles from "./styles/side-panel.module.css";

function SidePanel({ Assigneess, labels }) {

    useEffect(() => {
        console.log(labels);
    })

    return (
        <div>
            <Section heading="Assignees">
                <div>
                    <div className={styles['content']}>No Assigneess</div>
                </div>
            </Section>
            <Section heading="Labels">
                    <div>
                        {labels?.length > 0 && labels?.map((label, index) => {
                            return <Label name={label} key={index} />
                        })}
                        <div className={styles['content']}>
                            {labels?.length === 0 ? <span>No labels assigned</span> : null}
                        </div>
                    </div>
            </Section>

        </div>
    );
}

export default SidePanel;