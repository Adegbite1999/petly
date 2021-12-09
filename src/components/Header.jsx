import React, { useContext } from 'react';
import styles from '../styles/layout.module.css';
import classes from '../styles/header.module.css'
import logo from '../assets/Group.png'
import ThemeButton from '../button/ThemeButton';
import { ThemeContext } from '../context/ThemeContext'
function Header() {
    const { theme } = useContext(ThemeContext)
    return (
        <header className={` ${styles.header} ${theme === 'light' ? '' : styles.container }`}>
            <div className={classes.headerBox}>
                <div className={`${classes.headerLogo}  uk-margin-small-right ${theme === 'light' ? '' : classes.headerLogoDark}`}>
                    <img src={logo} alt="petly-logo" />
                </div>
                <h2 className={`${classes.headerSub} uk-margin-remove ${theme === 'light' ? '' : classes.textLight }`}>Petly</h2>
            </div>
            <p className={`${classes.sub} uk-margin-remove ${theme === 'light' ?'': classes.textLight}`}>Find a pet to Adopt</p>
            <p className={`${classes.sub} uk-margin-remove ${theme === 'light' ? "" : classes.textLight }`}>Report a missing pet</p>

            <div className={`${classes.headerToggle} ${theme === 'light' ? '' : classes.headerToggleDark}`}>
                <ThemeButton />
            </div>
        </header>
    )
}

export default Header
