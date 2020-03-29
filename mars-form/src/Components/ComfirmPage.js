import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ComfirmPage = () => {
    const history = useHistory();

    const homeButton = (e) =>{
        e.preventDefault();
        history.push('/')
    };

    useEffect(()=>{
        toast('Thank you for your application', {autoClose: 2000})
    },[])


    return (
        <div>
            <p>Thank you for your application</p>
            <button type="click" onClick={homeButton}>Home</button>
            <ToastContainer />
        </div>
    )
}

export default ComfirmPage
