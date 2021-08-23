import React from 'react'
import style from '../assets/cardFunction.module.css'

export const CardFunction = (props) => {
    return (
        <>
            <div className={style.card}>
                <img src={props.image} alt="" />
                <span>{props.span}</span>
                <p>
                {props.p}
                </p>
            </div>
        </>
    )
}
