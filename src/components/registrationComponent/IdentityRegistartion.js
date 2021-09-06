import React, { useState } from "react";
import style from "../../assets/commonAssets/comIdentity.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'


export default function IdentityRegistration(props) {
  const latters = "rdhfsdjtrag396856752";
  let lengths = latters.length;
  let one = latters.charAt(Math.random() * lengths);
  let two = latters.charAt(Math.random() * lengths);
  let three = latters.charAt(Math.random() * lengths);
  let four = latters.charAt(Math.random() * lengths);
  let result = one + two + three + four;
  let final = result.toString();

  const [random, setrandom] = useState(final);
  const [cap, setcap] = useState("");
  const [SelectData, setSelectData] = useState("--select--");
  const [SelectSubData, setSelectSubData] = useState(false);

  const verifybtn = () => {
    alert("validations success! backend under building!");
  };

  const capchaGet = (event) => {
    const getdata = event.target.value;
    setcap(getdata);
    // if(cap === random){
    //   alert('verifivation success')
    // }else{
    //   alert('verifivation fail')
    // }
  };

  let randomhandle = () => {
    setrandom(final);
  };

  // main selection part here
  const selectData = (e) => {
    let Sdata = e.target.value;
    setSelectData(Sdata);
  };

  // sub selection part here
  const selectSubData = (e) => {
    let Subdata = e.target.value;
    setSelectSubData(Subdata);
  };

  return (
    <>
      <div className={style.inputs}>
        <div className={style.subtitle}>
          <h3>Identity verificaiton</h3>
        </div>
        <div className={style.one}>
          <div className={style.input_field}>
            <label>Select type:</label>
            <select className={style.options} onClick={selectData}>
              <option value="1"> --Select--</option>
              <option value="2">
                Citizen registration (25 years & above){" "}
              </option>
              <option value="3">
                All officers and employees of the Government Health and Family
                Planning Department
              </option>
              <option value="4">
                Approved private health and family planning officers-employees{" "}
              </option>
              <option value="5">
                All directly involved government and private health care
                officers=employess{" "}
              </option>
              <option value="2">Heroic freedom fighters and heroines </option>
              <option value="2">Front-line law enforcement agency </option>
              <option value="2">
                Military and paramilitary defense forces{" "}
              </option>
              <option value="2">Civilian Aircraft </option>
              <option value="2">
                Essential Offices for governance the state{" "}
              </option>
              <option value="2">Bar Council Registrar Attorney </option>
              <option value="2">Educational Institutions </option>
              <option value="2">Front-line media workers </option>
              <option value="2">Elected Public representative </option>
              <option value="2">
                Front-line officers and employess of City Corporation and the
                municipality{" "}
              </option>
              <option value="2">
                Religiour Representatives (of all religions){" "}
              </option>
              <option value="2">Engaged in burial </option>
              <option value="2">
                Government officials and employees at the forefront of emergency
                electrcity, water, gas, sewerage and fire services.{" "}
              </option>
              <option value="2">
                Government officials and employess of railway stations,
                airports, Land ports and seaprots{" "}
              </option>
              <option value="2">
                Government officials and involved in emergency public service in
                districts and upazilas{" "}
              </option>
              <option value="2">Bank officer-employee</option>
              <option value="2">Farmer </option>
              <option value="2">Workers </option>
              <option value="2">Students 18 years and above </option>
              <option value="2">National players </option>
              <option value="2">
                Students in medical education related subjects{" "}
              </option>
              {props.datass}
            </select>
          </div>
         
          {  /* eslint-disable */ SelectData == 3 ? ( 
            <div className={style.input_field}>
              <label>Select sub type:</label>
              <select className={style.options} onClick={selectSubData}>
                <option>--Select--</option>
                <option value="111">Doctor</option>
                <option value="111">Nurse and Midwife</option>
                <option value="111">Medical Technologist</option>
                <option value="111">Cleaning staff</option>
              </select>
            </div>
          ) : null}
        </div>

       
        {SelectData == 2 || SelectSubData == 111 ? (
          <div>
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
                <label>
                  Date of birth (according to national identity card):
                </label>
                <div className={style.dob}>
                  <select className={style.dobs}>
                    <option>day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                  <select className={style.dobs}>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>Jone</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>Decimber</option>
                  </select>
                  <select className={style.dobs}>
                    <option>Year</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={style.capcha_field}>
              <div className={style.capcha}>
                <h4 className={style.random}>{random}</h4>
                <FontAwesomeIcon icon={faUndo}
                  className={style.icons}
                  type="button"
                  
                  onClick={randomhandle}
                />
 
                <p className={style.paragh}>
                  write the letters from above here
                </p>
                <input
                  className={style.capinput}
                  type="text"
                  name="capcha"
                  value={cap}
                  onChange={capchaGet}
                />
              </div>
              {cap === random ? (
                <input
                  className={style.verifybtn}
                  type="button"
                  value="Verify"
                  onClick={verifybtn}
                />
              ) : (
                <input
                  className={style.verifybtn}
                  style={{ background: "gray", cursor: "not-allowed" }}
                  type="button"
                  value="Verify"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
