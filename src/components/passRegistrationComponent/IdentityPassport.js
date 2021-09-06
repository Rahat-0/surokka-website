import React, { useState  } from "react";
import style from "../../assets/commonAssets/comIdentity.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import CountryList from "./CountryList";


export default function IdentityPassport(props) {
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
  const [SelectData, setSelectData] = useState(false);
  const [SelectSubData, setSelectSubData] = useState(false);

  const verifybtn = () => {
    alert("success");
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
    let Subdata = e.target.name;
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
              <option > --Select--</option>
              <option value="2">Foreign National</option>
              <option value="3">Bangladeshi Workers</option>
              <option value="3">Bangladeshi Students</option>
            </select>
          </div>

          {SelectData == 2 ? (
            <div className={style.input_field}>
              <label>Select Country:</label>
                <CountryList onClick={selectSubData} /> 
            </div>
          ) : null}
        </div>

        {/* // eslint-disable-next-line eqeqeq */}
        {SelectData == 3  ||  SelectSubData == 'bangladesh' ? (
          <div>
            <div className={style.one}>
              <div className={style.input_field}>
                <label>Passport Number:</label>
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
