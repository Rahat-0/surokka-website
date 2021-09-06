import React from "react";
import style from '../assets/registration/reg.module.css'
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";
import IdentityRegistration from "../components/registrationComponent/IdentityRegistartion";


export default function Registration() {

  
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          headTitle="Vaccine Registration"
          imageurl="https://surokkha.gov.bd/static/media/new-user.32b65f85.png"
          paragraph="Complete the registration by verifying your national identity card and mobile number in the form below. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone."
        />
       < IdentityRegistration />
      </div>
    </>
  );
}
