import React, { useState } from "react";
import Diets from "./Diets";
import CountrySelect from "./CountrySelect";
import DOB from "./DOB";
import UserInfo from "./UserInfo";
import MarsInput from "./MarsInput";
import useInput from "../Util/CustomHook";

const Forms = () => {
  const [toggle, setToggle] = useState(false);
  const userInfoObj = useInput("");
  const marsInputObj = useInput("");
  const dobInputObj = useInput("");
  const dietInputObj = useInput("");
  const countrySelectObj = useInput("");

  const formCompleted = e => {
    e.preventDefault();
    if (
      userInfoObj.value === "" ||
      marsInputObj.value === "" ||
      dobInputObj.value === "" ||
      dietInputObj.value === "" ||
      countrySelectObj.value === ""
    ) {
      alert('Please fill in the required fields');
      setToggle(false)
    }else{
      setToggle(true)
    }

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
          <button>Submit</button>
        </form>
        {toggle ? <p>{userInfoObj.value}</p> : null}
      </div>
    </>
  );
};

export default Forms;
