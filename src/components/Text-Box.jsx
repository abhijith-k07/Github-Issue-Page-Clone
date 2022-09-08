import React from "react";
import styles from './styles/text-box.module.css';


function TextBox({ label, onChange, subLabel, value, name, id, height, isMandatory }) {

    const onInputChange = (e) => {
        e.preventDefault();
        onChange(e);
    }


    return (
        <>
            <div className={styles['custom-textarea']} >
                <label>{label} {isMandatory ? <sup>*</sup> : null}</label>
                {subLabel ? <span>{subLabel}</span> : null}
                <textarea value={value} name={name} id={id} rows={height} onChange={onInputChange}></textarea>
            </div>
        </>
    )
}

export default TextBox;