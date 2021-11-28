import React from 'react'
import styles from '../styles/layout.module.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
function LayOut(props) {
    return (
        <div className={styles.container}>
               <Header/>
               <main className={styles.main}>{props.children}</main>
            <Footer/>
        </div>
    )
}

export default LayOut
