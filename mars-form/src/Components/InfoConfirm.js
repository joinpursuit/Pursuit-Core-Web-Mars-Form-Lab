import React from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoConfirm = () => {
    const history = useHistory()

    const handleClick = (e) =>{
        e.preventDefault();
        history.push('/confirm')
        toast('Thank you for your application');
    }
    return (
        <div>
            <button type="click" onClick={handleClick}>Confirm!</button>
            <ToastContainer />
        </div>
    )
}

export default InfoConfirm
