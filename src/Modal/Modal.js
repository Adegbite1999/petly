import React,{useEffect} from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css'

const Backdrop = (props) =>{
    return(
        <div onClick={props.CloseModal} className={styles.backdrop}></div>
    )
}


const Overlay = (props) =>{
    return(
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )
}

function Modal(props) {
    useEffect(() =>{
        return window.scroll(0,0)
    })
    return (
        <React.Fragment>
             {ReactDOM.createPortal(<Backdrop CloseModal={props.onClose} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
        </React.Fragment>
    )
}

export default Modal
