import React from 'react'
import style from '../assets/navber.module.css'
export const Navber = () => {
    return (
        <>
            
                
                <nav>
                    
                    <ul>
                    <img src="https://surokkha.gov.bd/static/media/logo-f.5c608b98.png" alt="logo app" />
                        <li className={style.listItem}><a href="somenting.com">Home</a></li>
                        <li className={style.listItem}><a href="somenting.com">Registration</a></li>
                        <li className={style.listItem}><a href="somenting.com">Registration(Passport)</a></li>
                        <li className={style.listItem}><a href="somenting.com">Status</a></li>
                        <li className={style.listItem}><a href="somenting.com">Card</a></li>
                        <li className={style.listItem}><a href="somenting.com">Certificate</a></li>
                        <li className={style.listItem}><a href="somenting.com">Verify Cerfificate</a></li>
                        <li className={style.listItem}><a href="somenting.com">Manual</a></li>
                        <li className={style.listItem}><a href="somenting.com">FAQ</a></li>
                        <li><button href="somenting.com">বাংলা</button></li>
                    </ul>
                </nav>
                
                <div className={style.adjustment}></div>
        </>
    )
}
