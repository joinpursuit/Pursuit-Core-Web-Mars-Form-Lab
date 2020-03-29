import React from 'react';
import { useHistory } from 'react-router-dom'

const InfoConfirm = () => {
    const history = useHistory()

    const handleClick = (e) =>{
        e.preventDefault();
        history.push('/confirm')
    }
    return (
        <div>
            <button type="click" onClick={handleClick}>Confirm!</button>
        </div>
    )
}

export default InfoConfirm
