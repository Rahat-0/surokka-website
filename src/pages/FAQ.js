import React from "react";
import style from "../assets/faq/faq.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";

export default function FAQ() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          color="#cce5ff"
          headTitle="Check Registration Status"
          imageurl="https://surokkha.gov.bd/static/media/new-faq-circle.172e4db5.png"
          paragraph="Various questions and answers related to registration, next steps, receipt of SMS message, receipt of vaccine card, vaccination center, time of vaccination, dose of vaccine, receipt of final certificate etc. can be found in the following section."
        />
      </div>
    </>
  );
}
