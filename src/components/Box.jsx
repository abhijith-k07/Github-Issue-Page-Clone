import React from "react";
import styles from './styles/box.module.css';


function Box({ children }) {

    return (
        <>
            <div className={styles['box']}>
                {children}
            </div>

        </>
    );
}

export default Box;