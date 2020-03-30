import React from 'react';
import { useHistory } from 'react-router-dom';

const NextRadioTwo = () => {
    const history = useHistory();
    const handleClick = (e) =>{
        debugger
        e.preventDefault();
        history.push('/next');
    }
    
    return (
        <div>
            <button type='click' onClick={handleClick}>Next</button>
        </div>
    )
}

export default NextRadioTwo
