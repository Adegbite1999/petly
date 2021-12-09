import React, { useContext } from 'react'
import './button.css'
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';
import { ThemeContext } from '../context/ThemeContext'

function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext)
    



    return (
        <React.Fragment>
            <button onClick={() => setTheme('light')}  className={ `${theme === 'light' ? 'theme-light' : ''} btn`}>< FiSun color={ theme === 'light' ? 'rgba(59,130,246,0.5)' : '#fff'}/></button>
            <button onClick={() => setTheme('dark')}className={`${theme === 'light'? '': 'theme-dark'} btn`}><IoIosMoon color={ theme === 'light' ? '#ccc' : 'rgba(59,130,246,1)'} /></button>
        </React.Fragment>

    )
}

export default ThemeButton