import React, { useState, useEffect } from "react";

function Icon({ name, width, height }) {
    const icons = [
        { name: 'person', url: '/icons/person.png' },
        { name: 'done', url: '/icons/tick.png' },
        { name: 'reopened', url: '/icons/reopen.png' },
        { name: 'settings', url: '/icons/settings.png' }
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
        <><img style={{ width: width ? width + 'px' : '16px', height: height ? height  + 'px' :  '16px', object: 'cover', filter: 'invert()' }} src={iconUrl} alt="icon" /></>
    )

}

export default Icon;