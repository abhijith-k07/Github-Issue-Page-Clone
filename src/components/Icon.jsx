import React, { useState, useEffect } from "react";

function Icon({ name }) {
    const icons = [
        { name: 'person', url: '/icons/person.png' }
    ]
    const [iconUrl, setIconUrl] = useState('');

    useEffect(() => {
        for (let icon of icons) {
            if (icon.name === name) {
                setIconUrl(icon.url);
                break;
            }
        }
    }, [])

    return (
        <><img style={{ width: '16px', height: '16px', object: 'cover', filter:'invert()' }} src={iconUrl} alt="icon" /></>
    )

}

export default Icon;