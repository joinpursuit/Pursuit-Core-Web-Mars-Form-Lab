import React from 'react';
import { useHistory } from 'react-router-dom';

const RadioConfirm = () => {
    const history = useHistory()

    const handleClick = (e) =>{
        e.preventDefault();
        history.push('/cont');
    }
    return (
        <div>
            <button type="click" onClick={handleClick}>Next</button>
        </div>
    )
}

export default RadioConfirm;
