import React, { useEffect, useState, useRef } from "react";
import Icon from "./Icon";
import styles from './styles/menu.module.css';

function Menu({ children, title, hideMenu }) {
    const [showMenu, setShowMenu] = useState(false);
    const containerRef = useRef(null);

    const handleClik = (e) => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const outsideClickHandler = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", outsideClickHandler);

        return () => { document.removeEventListener("mousedown", outsideClickHandler) };
    }, []);

    useEffect(() => {
        console.log('running');
        setShowMenu(false);
    }, [hideMenu])


    return (
        <div className={styles['menu']} ref={containerRef}>
            <div onClick={handleClik}>
                <Icon name="settings" />
            </div>
            {
                showMenu && <div className={styles['menu-view']}>
                    <div className={styles['menu-heading']}>{title}</div>
                    <div>
                        {children}
                    </div>
                </div>
            }

        </div>
    )
}

export default Menu;