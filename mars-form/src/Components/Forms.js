import React from "react";
import Diets from './Diets';
import CountrySelect from './CountrySelect';
import DOB from './DOB';
import UserInfo from './UserInfo';
import MarsInput from './MarsInput'

const Forms = () => {
  
  const submithandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Mission to Mars Registration Form</h1>
      <div>
        <form onSubmit={submithandler}>
          <UserInfo />
          <DOB />
          <CountrySelect />
          <Diets />
          <MarsInput />
        </form>
      </div>
    </>
  );
};

export default Forms;
