import React from "react";
import style from "../assets/card/card.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";
export default function Card() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          color="#FFE5CC"
          headTitle="Vaccine Card Download"
          imageurl="https://surokkha.gov.bd/static/media/new-card.73172282.png"
          hides = 'Download your Vaccine Card (Passport holder Bangladeshi and Foreigners)'
          paragraph="Enter your National Identity Card number and date of birth (according to the National Identity Card) in the form below and click on the Verify  button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Card."
        />
      </div>
    </>
  );
}
