import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../Util/CustomHook";

const RadioInputThree = () => {
  const [toggle, setToggle] = useState(true);
  const history = useHistory()
  const radioThreeObj = useInput("");

  const handleClick = (e) =>{
    e.preventDefault();
    history.push('/four')
  }

  const handleChange = (e) =>{
    e.preventDefault();
    if(radioThreeObj === ''){
      debugger
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  return (
    <div onChange={handleChange}>
      <p>
        When you are in a stressful or difficult situation, how do you most
        frequently react?
      </p>
      <input
        type="radio"
        {...radioThreeObj}
        id="determined"
        name="stress"
        value="determined"
      />
      <label>Determination: I continue to confront the situation.</label>
      <input
        type="radio"
        {...radioThreeObj}
        id="divorced"
        name="stress"
        value="defeat"
      />
      <label>Defeat: I stop confronting the situation.</label>
      <input
        type="radio"
        {...radioThreeObj}
        id="widowed"
        name="stress"
        value="anger"
      />
      <label>Anger: I become upset at the situation.</label>
      <input
        type="radio"
        {...radioThreeObj}
        id="single"
        name="stress"
        value="resourceful"
      />
      <label>Resourcefulness: I seek help to confront the situation.</label>

      {toggle ? <button onClick={handleClick}>Next</button> : <p>please fill all requiered fields</p> }
    </div>
  );
};

export default RadioInputThree;
