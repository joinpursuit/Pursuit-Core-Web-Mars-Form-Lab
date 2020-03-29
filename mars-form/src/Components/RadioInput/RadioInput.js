import React from 'react'

const RadioInput = ({radioObj}) => {

    return (
        <div>
        
            <p>Can you breathe underwater longer than 1 minute?</p>
            <input type='radio' {...radioObj} id='yes' name='air' value='yes'/>
            <label>Yes</label>
            <input type='radio' {...radioObj} id='no' name='air' value='no'/>
            <label>No</label>
            <input type='radio' {...radioObj} id='idk' name='air' value='idk'/>
            <label>I don't know</label>

        </div>
    )
}

export default RadioInput
