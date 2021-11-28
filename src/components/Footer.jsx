import React from 'react';
import styles from '../styles/layout.module.css';
import classes from '../styles/footer.module.css';
import logo from '../assets/Group.png'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin

} from 'react-icons/fa'
import Button from '../button/Button';

function Footer() {
    return (
        <footer className={`${styles.footer} ${classes.footer}`}>
            <div className={classes.cta}>
                <h4 className={classes.ctaText}> <span className={classes.hue}>Need</span> Help with Adopting a pet?</h4>
                {/* <button>View all pets</button> */}
                <Button className={classes.mt}>View all pets</Button>
            </div>
            <div className={classes.footerBox}>
                <div className={classes.headerBox}>
                    <div className={classes.headerLogo}>
                        <img src={logo} alt="petly-logo" />
                    </div>
                    <h2 className={classes.headerSub}>Petly</h2>
                </div>
                <div className={classes.social}>
                    <span className={classes.socialItem}><FaFacebook size={20} color="#58667E" /></span>
                    <span className={classes.socialItem}><FaInstagram size={20} color="#58667E" /></span>
                    <span className={classes.socialItem}><FaTwitter size={20} color="#58667E" /></span>
                    <span className={classes.socialItem}><FaLinkedin size={20} color="#58667E" /></span>
                </div>
                <div className={classes.condition}>
                    <button className={`${classes.btn} uk-margin-large-right`}>Terms of use</button>
                    <button className={classes.btn}>Privacy Policy</button>
                </div>
            </div>
            <p className={classes.copyright}>Copyright © 2021 Petly. All rights reserved.</p>
        </footer>
    )
}

export default Footer
