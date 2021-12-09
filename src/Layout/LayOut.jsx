import React,{useContext} from 'react'
import styles from '../styles/layout.module.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
import {ThemeContext} from '../context/ThemeContext'
function LayOut(props) {
    const{theme} = useContext(ThemeContext)
    return (
        <div className={ theme === 'light'? '' : styles.container}>
               <Header/>
               <main className={styles.main}>{props.children}</main>
            <Footer/>
        </div>
    )
}

export default LayOut
