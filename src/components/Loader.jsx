import React from "react";
import styles from './styles/loader.module.css';

//specify size in terms of a square of side 14px

function Loader({ size, color, loaderText }) {

    const loaderProperties = {
        padding: size * 10 + 'px',
        borderWidth: size * 0.8 + 'px',
        borderColor: color ? color : 'white',
        borderRightColor: "transparent"
    }

    return (
        <div className={styles["loader-wrapper"]}>
            <div className={styles['loader']} style={loaderProperties}></div>
            {loaderText && <div className={styles['loader-text']}>{loaderText}</div>}
        </div>
    );
}

export default Loader;