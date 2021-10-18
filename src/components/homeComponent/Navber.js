import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../assets/navber.module.css";
export const Navber = () => {
  const [ico, setIco] = useState(true);

  const activeStyle = "5px darkblue  solid";

  return (
    <>
      <nav>
        <div className={styles.bars}>
          <div>
            <img
              src="https://surokkha.gov.bd/static/media/logo-f.5c608b98.png"
              alt="logo app"
            />
          </div>
          <div>
            {ico !== true ? (
              <i
                className="fas fa-bars 3x"
                id={styles.ico}
                onClick={() => {
                  setIco(!ico);
                }}
              ></i>
            ) : (
              <i
                className="fas fa-times"
                id={styles.ico}
                onClick={() => {
                  setIco(!ico);
                }}
              ></i>
            )}
          </div>
        </div>
        {ico !== false ? (
          <ul>
            <li className={styles.listItem}>
              <NavLink activeStyle={{ borderBottom: activeStyle }} exact to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                activeStyle={{ borderBottom: activeStyle }}
                to="/registration"
              >
                Registration
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                activeStyle={{ borderBottom: activeStyle }}
                to="/registrationpassport"
              >
                Registration(Passport)
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeStyle={{ borderBottom: activeStyle }} to="/status">
                Status
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeStyle={{ borderBottom: activeStyle }} to="/card">
                Card
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                activeStyle={{ borderBottom: activeStyle }}
                to="/certificate"
              >
                Certificate
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                activeStyle={{ borderBottom: activeStyle }}
                to="/verifycertificate"
              >
                Verify Certificate
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeStyle={{ borderBottom: activeStyle }} to="/manual">
                Manual
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeStyle={{ borderBottom: activeStyle }} to="/faq">
                FAQ
              </NavLink>
            </li>
            <li>
              <button>বাংলা</button>
            </li>
          </ul>
        ) : null}
      </nav>

      <div className={styles.adjustment}></div>
    </>
  );
};
