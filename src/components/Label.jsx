import React, { useState, useEffect } from "react";
import styles from './styles/tag.module.css';

function Label({ name }) {
    const [labelDetails, setLabelDetails] = useState(null);

    useEffect(() => {
        const labels = JSON.parse(localStorage.getItem('labels'));
        const reqLabel = labels.filter(label => label.name === name);
        setLabelDetails(reqLabel[0]);
    }, []);


    return (
        <div className={styles['tag']} style={{ backgroundColor: labelDetails?.color, borderColor: labelDetails?.color }} >
            <span>{name}</span>
        </div>
    )
}

export default Label;
