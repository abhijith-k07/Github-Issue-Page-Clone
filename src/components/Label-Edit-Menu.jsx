import React, { useState } from 'react';
import Menu from './Menu';
import Autocomplete from './Autocomplete';
import styles from './styles/label-edit-menu.module.css';
import cx from 'classnames';
import { putRequest } from '../utilities/functions/Http-client'

const initialState = [
    { name: "bug", color: "red", description: "A unintented behaviour" },
    { name: "documentation", color: "blue", description: "Improvement to documentation" },
]

function LabelEditMenu({ labelAdded, issueId }) {
    const [labels, setLabels] = useState([...initialState]);
    const [closeMenu, setCloseMenu] = useState(true);

    const onQuery = (query) => {
        const filteredLabels = initialState.filter(label => label.name.toLowerCase().includes(query.toLowerCase()));
        setLabels(filteredLabels);
    }

    const onSelect = (value) => {
        const payload = {
            issueId,
            label: value.name
        };
        putRequest('issue/labels', payload).then((response) => {
            labelAdded(value.name);
            setCloseMenu(!closeMenu);
            setLabels(initialState);
        })
    }

    return (
        <div>
            <Menu title="Apply label to this issue" hideMenu={closeMenu} >
                <Autocomplete placeholder="Add a label" onSearch={onQuery}>
                    {labels.length > 0 && labels?.map((label, index) => {
                        return (
                            <div className={cx(styles['label-row'], 'pointer')} key={index} onClick={() => onSelect(label)}>
                                <div className={styles['label-title']}>
                                    <div className={styles['label-color-indicator']} style={{ backgroundColor: label.color }}></div>
                                    <div>{label?.name}</div>
                                </div>
                                <div className={styles['label-desc']}>
                                    {label.description}
                                </div>
                            </div>
                        )
                    })}
                </Autocomplete>
            </Menu>
        </div>
    )
}

export default LabelEditMenu;