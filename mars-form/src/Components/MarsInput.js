import React, { useState } from "react";

function MarsInput() {
  const [input, setInput] = useState("");
  const inputStyle = {
    width: "400px",
    height: "150px"
  };
  return (
    <div>
      <label>Why do you want to be a Mars explorer?</label>
      <input
        type="text"
        value={input}
        style={inputStyle}
        onChange={e => setInput(e.target.value)}
        maxlength="150"
      />
    </div>
  );
}

export default MarsInput;
