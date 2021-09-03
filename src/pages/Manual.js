import React from "react";
import style from "../assets/manual/manual.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";

export default function Manual() {
  return (
    <div>
      <div className={style.whole}>
        <CommonHeadCard
          color="#ccccff"
          headTitle="Vaccine Manual"
          imageurl="https://surokkha.gov.bd/static/media/new-book-open.5e32fe88.png"
        />
      </div>
    </div>
  );
}
