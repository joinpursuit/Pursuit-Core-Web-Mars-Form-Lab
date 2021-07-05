import React from 'react';
import { useHistory } from 'react-router-dom'

const NextRadio = () => {
    const history = useHistory();

    const handleNext = (e) =>{
        e.preventDefault();
        history.push('/cont');
    }

    return (
        <div>
            <button type="click" onClick={handleNext}>Next</button>
        </div>
    )
}

export default NextRadio;
