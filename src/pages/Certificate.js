import React from "react";
import style from "../assets/certificate/certificate.module.css";
import ComIdentity from "../components/CommonComponent/ComIdentity";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";

export default function Certificate() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          color="#99ffcc"
          headTitle="Certificate"
          imageurl="https://surokkha.gov.bd/static/media/new-certification-card.ac1c4d8c.png"
          hides = "Download Your Vaccine Certificate (Passport holder Bangladeshi and Foreigners)"
          paragraph="Enter your National Identity Card number and date of birth (according to the National Identity Card) in the form below and click on the Verify button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Certificate."
        />
        <ComIdentity />
      </div>
    </>
  );
}
