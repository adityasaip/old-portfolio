import './header.css'
import { useState } from 'react';
import ASP from '../assets/ASP_final.svg'
function Header() {

    const [isExpanded, setClass] = useState(false)

    function handleClass() {
        setClass(!isExpanded)
    }

    return (
        <nav className='nav-bar' >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            {/* <h3>Aditya Sai P</h3> */}
            <img className='header--logo' src={ASP} />
            <span onClick={handleClass} className='drop-down'><span className="material-symbols-outlined">{isExpanded? "close": "arrow_drop_down"}</span></span>
            <ul className={isExpanded? "nav-list expanded": "nav-list"}>
                <li><a href='#' className='nav-anchor'>Education</a></li>
                <li><a href='#' className='nav-anchor'>Projects</a></li>
                <li><a href='#' className='nav-anchor'>Work</a></li>
            </ul>

            


        </nav>
    )
}

export default Header