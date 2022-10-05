import React, { useState, useEffect } from "react";
import styles from './styles/tag.module.css';

const labelMap = [
    { name: 'bug', color: 'rgba(255, 0, 0, 0.45)', description: 'An unintented behaviour' },
    { name: 'documentation', color: 'rgba(0, 0, 255, 0.45)', description: 'Improvements to documentation' }
]


function Label({ name }) {
    const [labelDetails, setLabelDetails] = useState(null);

    useEffect(() => {
        const reqLabel = labelMap.filter(label => label.name === name);
        setLabelDetails(reqLabel[0]);
    }, [name]);


    return (
        <div className={styles['tag']} style={{ backgroundColor: labelDetails?.color, borderColor: labelDetails?.color }} >
            <span>{name}</span>
        </div>
    )
}

export default Label;
