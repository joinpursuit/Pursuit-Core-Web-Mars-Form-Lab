import React, { useState } from "react";

function DOB() {
  const [birthday, setBirthday] = useState("");
  return <div>
      <label>What is your date of birth?</label>
          <input
            type="date"
            id="birth"
            name="dob"
            value={birthday}
            min="1900-01-01"
            max="2900-01-01"
            onChange={e => setBirthday(e.target.value)}
          />
  </div>;
}

export default DOB;
