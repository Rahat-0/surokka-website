import React from "react";
import style from "../assets/faq/faq.module.css";
import CommonHeadCard from "../components/CommonComponent/CommonHeadCard";
import FaqCom from "../components/faqCom/faqCom";

export default function FAQ() {
  return (
    <>
      <div className={style.whole}>
        <CommonHeadCard
          color="#cce5ff"
          headTitle="Frequently Asked Questions"
          imageurl="https://surokkha.gov.bd/static/media/new-faq-circle.172e4db5.png"
          paragraph="Various questions and answers related to registration, next steps, receipt of SMS message, receipt of vaccine card, vaccination center, time of vaccination, dose of vaccine, receipt of final certificate etc. can be found in the following section."
          last="Frequently Asked Questions about Covid-19 Corona Vaccine"
        />
        <FaqCom
          question="What to do if OTP is not received at the last step of the registration process?"
          answer="You can resend OTP. If you unfortunately close the OTP providing screen, can re-register."
        />
        <FaqCom
          question="If I want to register for Covid-19 coronavirus vaccine, how do I register online?"
          answer='You can register by logging on to www.surokkha.gov.bd web portal or by downloading the “Surokkha” app from Google Play Store. See  "Manual" on the web portal for details.'
        />
        <FaqCom
          question="I have registered for the vaccine online, what should I do next?"
          answer="Download Vaccine Card from www.surokkha.gov.bd web portal. Later, the date and center of the vaccine will be informed via SMS on the mobile phone."
        />
        <FaqCom
          question="How to check the Registration status for Covid-19 vaccine online?"
          answer='You can know the status of registration by verifying the national identity card and mobile number from the "Registration Status" menu on the web portal www.surokkha.gov.bd.'
        />
        <FaqCom
          question="How can I get a vaccine card for receiving the Covid-19 vaccine?"
          answer='You can Download Vaccine Card by verifying National Identity Card and Mobile Number from the "Vaccine Card Download" menu at www.surokkha.gov.bd'
        />
        <FaqCom
          question="How do I know the center and date for receiving the vaccine?"
          answer="After the successful registration for the vaccine, the date and center of the vaccine will be informed via SMS on the mobile phone at a later time.
          "
        />
        <FaqCom
          question="How many doses of Covid-19 vaccine should be taken?"
          answer="Two doses of Covid-19 vaccine should be taken."
        />
        <FaqCom
          question="How can I get a vaccine certificate after completion of Covid-19 vaccine?"
          answer='After completion of two doses of Covid-19 vaccine, you can collect the vaccine certificate by verifying the national identity card and mobile number from the "Vaccine Certificate Download" menu at the web portal www.suraksha.gov.bd'
        />
        <FaqCom
          question="Who can receive Covid-19 vaccine?"
          answer="According to the National Covid-19 immunization and action plan, everyone will be vaccinated according to the priority list."
        />
        <FaqCom
          question="Someone asked, my grandfather is 70 years old but can't get out of bed as paralyzed, how can my grandfather get vaccinated?"
          answer="Covid-19 immunization activities are service based, so the intended person has to come to the immunization center and get vaccinated."
        />
        <FaqCom
          question="Who cannot be vaccinated in this campaign?"
          answer="Covid vaccine cannot be given to any person other than the target population of the registered / included in the line listing. Pregnant mothers and lactating mothers, under 18 years of age, sick and hospitalized, need to request a vaccination from the designated immunization center as advised by the doctor. Vaccination cannot be done against the will of the person.
          "
        />
        <FaqCom
          question="One asked, will a pregnant woman get this vaccine?"
          answer="Pregnant women will not be given Covid-19 vaccine for the time being.
          "
        />
        <FaqCom
          question="NID card is lost, how do I register?"
          answer="This Covid-19 vaccine will be brought under online registration through National Identity Card. The Covid-19 vaccine will be given to everyone in phases. So come next with an NID or National Identity Card.
          "
        />
        <FaqCom
          question="No vaccination card has been brought, no information can be seen on the mobile; What to do now?"
          answer="The vaccinator will ask him to reprint the card and bring it back"
        />
        <FaqCom
          question="Earlier affected by Covid-19 and recovered after treatment, can I get Covid-19 vaccine?"
          answer="Covid-19 vaccine will be given if listed on priority basis."
        />
        <FaqCom
          question="28 years old, 5 months pregnant. She works at Covid Hospital; Will Covid-19 get vaccinated?"
          answer="As the effect of Covid-19 vaccine on pregnant women is not confirmed, pregnant women will not be given Covid-19 vaccine for the time being."
        />
        <FaqCom
          question="A frontline worker goes home every day after work. So will everyone at home get this vaccine?"
          answer="Vaccination will be given only on the basis of priority list."
        />
        <FaqCom
          question="If a person from another center / area comes to get vaccinated during vaccination, can he be vaccinated?"
          answer="If he/she is included in the list, then he/she can be vaccinated. The vaccinator must update online."
        />
        <FaqCom
          question="I have to take pressure medicine every day; Can I be vaccinated?"
          answer="Covid-19 vaccine will be given if listed on priority basis."
        />
        <FaqCom
          question="I had a heart operation 15 days ago; Can I be vaccinated?"
          answer="Covid-19 vaccine will be given if healthy and enrolled on priority basis."
        />
        <FaqCom
          question="Does this vaccine have any side effects?"
          answer="Like all other medicines or vaccines, this vaccine has the potential for some side effects. However, in most cases, they are very mild, such as pain, swelling, redness at the injection site, muscle and joint pain, weakness, nausea, fever, fatigue etc. No serious side effects have been reported so far, according to clinical trials. However, if you have any problem, you must go to the nearest hospital immediately and seek the advice of a doctor.
          "
        />
      </div>
    </>
  );
}
