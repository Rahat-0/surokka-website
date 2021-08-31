import React from 'react'
import { Link } from 'react-router-dom'
import style from '../assets/navber.module.css'
export const Navber = () => {
    return (
        <>
            
                
                <nav>
                    
                    <ul>
                    <img src="https://surokkha.gov.bd/static/media/logo-f.5c608b98.png" alt="logo app" />
                        <li className={style.listItem}><Link to="/">Home</Link></li>
                        <li className={style.listItem}><Link to="/registration">Registration</Link></li>
                        <li className={style.listItem}><Link to="/registrationpassport">Registration(Passport)</Link></li>
                        <li className={style.listItem}><Link to="/status">Status</Link></li>
                        <li className={style.listItem}><Link to="/card">Card</Link></li>
                        <li className={style.listItem}><Link to="/certificate">Certificate</Link></li>
                        <li className={style.listItem}><Link to="/verifycertificate">Verify Certificate</Link></li>
                        <li className={style.listItem}><Link to="/manual">Manual</Link></li>
                        <li className={style.listItem}><Link to="/faq">FAQ</Link></li>
                        <li><button>বাংলা</button></li>
                    </ul>
                </nav>
                
                <div className={style.adjustment}></div>
        </>
    )
}
