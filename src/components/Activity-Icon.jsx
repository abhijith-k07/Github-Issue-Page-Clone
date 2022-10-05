import React from "react";
import Icon from "./Icon";
import styles from './styles/activity-icon.module.css';

function ActivityIcon({ activityName }) {
    const activityIconMap = {
        closed: { background: "green", iconName: "done" },
        reopened: { background: "purple", iconName: "reopened" }
    }

    return (    
        <>
            <span className={styles['activity-icon']} style={{ backgroundColor: activityIconMap[activityName]?.background }}>
                <Icon name={activityIconMap[activityName]?.iconName} />
            </span></>
    );
}

export default ActivityIcon;