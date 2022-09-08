import React from "react"
import styles from './styles/section.module.css';


function Section({ children, heading }) {

    return (
        <div className={styles['section']}>
            <span className={styles['heading']}>{heading}</span>
            {children}
        </div>
    )
}

export default Section;