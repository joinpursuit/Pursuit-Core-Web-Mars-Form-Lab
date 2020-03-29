import React from "react";

function UserInfo({ userInfoObj }) {
  return (
    <div>
      <label>What is your name?</label>
      <input type="text" {...userInfoObj} />
    </div>
  );
}

export default UserInfo;
