import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles/button.module.css';


function Button({ label, panelClasses, variant, disabled, onClick }) {

    const componentStyles = cx(
        styles[variant],
        panelClasses,
        styles.button,
        {
            [styles.disabled]: disabled,
        }
    )

    const handleClick = (e, ...args) => {
        if (disabled) return;
        onClick(e, args);
    }

    return (
        <div onClick={handleClick} className={componentStyles}>
            {label}
        </div>
    )

}

Button.propTypes = {
    label: PropTypes.string,
    panelClasses: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    label: '',
    panelClasses: '',
    variant: 'primary',
    disabled: false,
    onClick: null
}

export default Button;