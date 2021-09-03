import React from "react";
import style from "../assets/verifycertificate/vrfycert.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";

export default function VerifyCertificate() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          color="#99ffcc"
          headTitle="Verify Certificate"
          imageurl="https://surokkha.gov.bd/static/media/new-certification-card.ac1c4d8c.png"
          paragraph="Vaccination Certificate can be verified by clicking on Verify Vaccination Certificate button using NID, date of birth and Vaccination Certificate Number."
        />
      </div>
    </>
  );
}
