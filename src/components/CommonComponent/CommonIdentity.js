import React, { useState } from "react";
import style from "../../assets/commonAssets/comIdentity.module.css";

export default function CommonIdentity() {
  const [random, setrandom] = useState(Math.floor(Math.random(23) * 100));
  const [capcha, setcapcha] = useState(null);

  const capchaGet =()=>{
      
  }

  let randomhandle =()=>{
      const data = "abcd123";
      setrandom(Math.floor(Math.random(23) * 100) );
  }

  return (
    <>
      <div className={style.inputs}>
        <div className={style.subtitle}>
          <h3>Identity verificaiton</h3>
        </div>
        <div className={style.one}>
          <div className={style.input_field}>
            <label>Select type:</label>
            <select className={style.options}>
              <option value="1">Front-line media workers</option>
            </select>
          </div>

          <div className={style.input_field}>
            <label>Select sub type:</label>
            <select className={style.options}>
              <option>Journalist</option>
            </select>
          </div>
        </div>

        <div className={style.one}>
          <div className={style.input_field}>
            <label>National Identiy Card Number:</label>
            <input
              className={style.options}
              type="number"
              name="number"
              placeholder="example : 98989893237212"
            />
          </div>
          <div className={style.input_field}>
            <label>Date of birth (according to national identity card):</label>

            <div className={style.dob}>
              <select className={style.dobs}>
                <option>Day</option>
              </select>
              <select className={style.dobs}>
                <option>Month</option>
              </select>
              <select className={style.dobs}>
                <option>Year</option>
              </select>
            </div>
          </div>
        </div>

        <div className={style.capcha_field}>
          <div className={style.capcha}>
            <h4 className={style.random}>
              {random}
            </h4>
            <input className={style.icons} type="button" value="icon"  onClick={randomhandle} />

            <p className={style.paragh}>write the letters from above here</p>
            <input className={style.capinput} type="text" name="capcha" onChange={capchaGet} />
          </div>
          { }
          <input className={style.verifybtn} type="button" value="Verify" />
        </div>
      </div>
    </>
  );
}
