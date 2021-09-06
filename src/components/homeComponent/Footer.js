import React from "react";
import styles from "../../assets/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.secOne}>
          <img
            src="https://surokkha.gov.bd/static/media/logo_white.8ef9a1c4.svg"
            alt="pic"
          />
        </div>
        <div className={styles.secTwo}>
          <ul>
            <li>
              <a className={styles.links} href="1">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={styles.links} href="1">
                Terms of service
              </a>
            </li>
            <li>
              <a className={styles.links} href="1">
                Other Affiliates
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.secThree}>
          <p>Developed by - rahat</p>
          <img
            src="https://surokkha.gov.bd/static/media/ict.52410752.png"
            alt="imgss"
          />
        </div>
        <div className={styles.secFour}>
          <p>Affiliates -</p>
          <img
            src="https://surokkha.gov.bd/static/media/org.ed08c793.png"
            alt="imgss"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;