import React from 'react'
import './button.css';
function Button(props) {
    return (
       <button  size={props.size} className={`button ${props.className}`} onClick={props.action}>
        {props.children}
       </button>
    )
}

export default Button
