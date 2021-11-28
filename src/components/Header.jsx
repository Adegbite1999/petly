import React from 'react';
import styles from '../styles/layout.module.css';
import classes from '../styles/header.module.css'
import logo from '../assets/Group.png'
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';
function Header() {
    return (
        <header className={styles.header}>
            <div className={classes.headerBox}>
                <div className={`${classes.headerLogo} uk-margin-small-right`}>
                    <img src={logo} alt="petly-logo" />
                </div>
                <h2 className={`${classes.headerSub} uk-margin-remove`}>Petly</h2>
            </div>
            <p className={`${classes.sub} uk-margin-remove`}>Find a pet to Adopt</p>
            <p className={`${classes.sub} uk-margin-remove`}>Report a missing pet</p>

            <div className={classes.headerToggle}>
                <button className={classes.btn}><FiSun /></button>
                <button className={classes.btn}><IoIosMoon /></button>
            </div>
        </header>
    )
}

export default Header
