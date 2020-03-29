import React from 'react'

const RadioInputTwo = () => {
    return (
        <div>
             <p>What is your marital status?</p>
            <input type='radio' {...radioObj} id='married' name='status' value='married'/>
            <label>Married</label>
            <input type='radio' {...radioObj} id='divorced' name='status' value='divorced'/>
            <label>Divorced</label>
            <input type='radio' {...radioObj} id='widowed' name='status' value='widowed'/>
            <label>Widowed</label>
            <input type='radio' {...radioObj} id='single' name='status' value='single'/>
            <label>Single</label>
        </div>
    )
}

export default RadioInputTwo
