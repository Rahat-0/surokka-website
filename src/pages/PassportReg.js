import React from "react";
import style from "../assets/pasRegistration/passRegi.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";
import IdentityPassport from "../components/passRegistrationComponent/IdentityPassport";

export default function PassportReg() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          headTitle="Registration (Passport)"
          imageurl="https://surokkha.gov.bd/static/media/new-user.32b65f85.png"
          paragraph="Complete the registration by verifying your passport number and mobile number in the form below. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone."
        />
        < IdentityPassport />
      </div>
    </>
  );
}
