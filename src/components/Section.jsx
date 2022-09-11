import React from "react"
import styles from './styles/section.module.css';


function Section({ children, heading, editMenu}) {

    return (
        <div className={styles['section']}>
            <div className={styles['section-heading']}>
                <span className={styles['heading']}>{heading}</span>
                <div>{editMenu}</div>
            </div>

            {children}
        </div>
    )
}

export default Section;