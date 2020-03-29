import React, { useState } from "react";
import Diets from "./Diets";
import CountrySelect from "./CountrySelect";
import DOB from "./DOB";
import UserInfo from "./UserInfo";
import MarsInput from "./MarsInput";
import useInput from "../Util/CustomHook";
import InfoConfirm from './InfoConfirm';
import RadioInput from './RadioInput'

const Forms = () => {
  const [toggle, setToggle] = useState(false);
  const userInfoObj = useInput("");
  const marsInputObj = useInput("");
  const dobInputObj = useInput("");
  const dietInputObj = useInput("");
  const countrySelectObj = useInput("");
  const radioObj = useInput("")

  const formCompleted = e => {
    e.preventDefault();
    if (
      userInfoObj.value === "" ||
      marsInputObj.value === "" ||
      dobInputObj.value === "" ||
      dietInputObj.value === "" ||
      countrySelectObj.value === ""||
      radioObj.value === ""
    ) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const inputs = [
    userInfoObj.value,
    dobInputObj.value,
    countrySelectObj.value,
    dietInputObj.value,
    marsInputObj.value,
    radioObj.value

  ];

  const userDisplay = inputs.map(input => {
    return <li key={input}>{input}</li>;
  });

  const ulstyle = {
    listStyleType: "none"
  };

  return (
    <>
      <h1>Mission to Mars Registration Form</h1>
      <div>
        <form onSubmit={formCompleted}>
          <UserInfo userInfoObj={userInfoObj} />
          <DOB dobInputObj={dobInputObj} />
          <CountrySelect countrySelectObj={countrySelectObj} />
          <Diets dietInputObj={dietInputObj} />
          <MarsInput marsInputObj={marsInputObj} />
          <RadioInput radioObj={radioObj} />
          <button>Submit</button>
        </form>
        {toggle ? (
          <div>
            <ul style={ulstyle}>{userDisplay}</ul>
            <p>Is all this information true?</p>
            <InfoConfirm />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Forms;
