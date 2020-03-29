import React from "react";

const MarsInput = ({ marsInputObj }) => {
  const inputStyle = {
    width: "400px",
    height: "150px"
  };
  return (
    <div>
      <label>Why do you want to be a Mars explorer?</label>
      <input
        type="text"
        style={inputStyle}
        {...marsInputObj}
        maxLength="150"
      />
    </div>
  );
}

export default MarsInput;
