import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles/input.module.css';


function Input({ label, placeholder, panelClass, disabled, value, onChange, name, id, type, inputPanelCalss }) {

    const handleOnChange = (event) => {
        if (disabled) return;
        onChange(event);
    }

    const componentStyles = cx(panelClass, styles.input, {
        [styles.disabled]: disabled
    });

    const inputStyles = cx(inputPanelCalss, styles['input-decorated']);

    return (
        <div className={componentStyles}>
            <label>{label}</label>
            <input className={inputStyles} autoComplete="chrome-off" placeholder={placeholder} name={name} id={id} type={type} value={value} onChange={handleOnChange} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func
}

PropTypes.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    value: '',
    name: Math.random(),
    type: 'text',
    onChange: () => { }
}

export default Input;