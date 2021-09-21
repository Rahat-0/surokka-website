import React, { useState } from "react";
import style from "./faqCom.module.css";

export default function FaqCom(props) {
  const [para, setpara] = useState(false);

  return (
    <>
      <div className={style.faqCom}>
        <ul className={style.faqUl}>
          <li onClick={() => setpara(!para)}>{props.question}</li>
          <p
            className={style.faqPara}
            style={{ display: para ? "block" : "none" }}
          >
            {" "}
            {props.answer}{" "}
          </p>
        </ul>
        <hr style={{ marginTop: "40px", border: "lightgray 0.5px solid" }}></hr>
      </div>
    </>
  );
}
