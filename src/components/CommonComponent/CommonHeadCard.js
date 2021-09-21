import React from "react";
import style from "../../assets/commonAssets/headCard.module.css"

export default function CommonHeadCard(props) {
  return (
    <div>
      <div className={style.comHead} style={{background : props.color}}>
        <div className={style.comBody}>
          <h2>{props.headTitle}</h2>
          <img
            className={style.images}
            src={props.imageurl}
            alt="Logo"
          />
        </div>
      </div>
      <div className={style.para}>
      <h3>{props.hides}</h3>
        <p>{props.paragraph} </p>
        <h3 className={style.last}>{props.last}</h3>
      </div>
    </div>
  );
}
