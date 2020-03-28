import React, { useState } from 'react';

function UserInfo() {
    const [name, setName] = useState("");



    return (
        <div>
            <label>What is your name?</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default UserInfo
