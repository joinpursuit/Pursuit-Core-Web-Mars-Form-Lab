import React from "react";

const DOB = ({dobInputObj}) => {
  return (
    <div>
      <label>What is your date of birth?</label>
      <input
        type="date"
        id="birth"
        name="dob"
        min="1900-01-01"
        max="2900-01-01"
        {...dobInputObj}
      />
    </div>
  );
}

export default DOB;
