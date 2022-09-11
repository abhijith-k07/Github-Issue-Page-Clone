
import React, { useState } from "react";
import Input from "./Input";
import styles from './styles/autocomplete.module.css';
import cx from 'classnames';


function AutoComplete({ children, placeholder, onSearch, options, onSelect }) {
    const [inputVal, setInputVal] = useState('');

    const onQueryEnter = (e) => {
        const { value } = e.target;
        setInputVal(value);
        onSearch(value);
    }

    const onOptionSelect = (value) => {
        setInputVal('');
        onSelect(value);
    }


    return (
        <>
            <div className={styles['autocomplete']}>
                <div className={styles['autocomplete-input']}>
                    <Input value={inputVal} placeholder={placeholder} onChange={onQueryEnter} name="autocomplete" />
                </div>
                <div className={cx('mt-10', styles['autocomplete-options'])}>
                    {children || options?.map((option, index) => {
                        return <div className={styles['option']} key={index} onClick={() => onOptionSelect(option)}>{option}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default AutoComplete;