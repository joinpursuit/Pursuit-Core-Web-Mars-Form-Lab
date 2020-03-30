import React, { useState } from 'react';
import NextRadioTwo from './Buttons/NextRadioTwo';

const RadioInput = ({radioObj}) => {
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) =>{
        debugger
        e.preventDefault();
        if(radioObj === ""){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }


    return (
        <div onChange={handleChange}>
        
            <p>Can you breathe underwater longer than 1 minute?</p>
            <input type='radio' {...radioObj} id='yes' name='air' value='yes'/>
            <label>Yes</label>
            <input type='radio' {...radioObj} id='no' name='air' value='no'/>
            <label>No</label>
            <input type='radio' {...radioObj} id='idk' name='air' value='idk'/>
            <label>I don't know</label>

            {toggle ? <NextRadioTwo /> : <p>please fill in all requiered fields</p>}
        </div>
    )
}

export default RadioInput
