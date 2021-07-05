import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from '../../Util/CustomHook'

const RadioInputTwo = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const radioTwoObj = useInput("")

  const handleClick = e => {
      e.preventDefault()
      history.push("/nextPage");
  };

  const handleChange = (e) =>{
      e.preventDefault();
      debugger
      if (radioTwoObj.value === "") {
        setToggle(true);
      } else {
        setToggle(false);
      }
  }
  //youtube custom hooks

  return (
    <div onChange={handleChange}>
      <p>What is your marital status?</p>
      <input
        type="radio"
        {...radioTwoObj}
        id="married"
        name="status"
        value="married"
      />
      <label>Married</label>
      <input
        type="radio"
        {...radioTwoObj}
        id="divorced"
        name="status"
        value="divorced"
      />
      <label>Divorced</label>
      <input
        type="radio"
        {...radioTwoObj}
        id="widowed"
        name="status"
        value="widowed"
      />
      <label>Widowed</label>
      <input
        type="radio"
        {...radioTwoObj}
        id="single"
        name="status"
        value="single"
      />
      <label>Single</label>

      {toggle ? (
        <button onClick={handleClick}>Next</button>
      ) : (
        <p>please fill in all requiered fields</p>
      )}
    </div>
  );
};

export default RadioInputTwo;
