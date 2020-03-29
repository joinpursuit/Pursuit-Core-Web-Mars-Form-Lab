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


            <p>What is your marital status?</p>
            <input type='radio' {...radioObj} id='married' name='status' value='married'/>
            <label>Married</label>
            <input type='radio' {...radioObj} id='divorced' name='status' value='divorced'/>
            <label>Divorced</label>
            <input type='radio' {...radioObj} id='widowed' name='status' value='widowed'/>
            <label>Widowed</label>
            <input type='radio' {...radioObj} id='single' name='status' value='single'/>
            <label>Single</label>

            <p>When you are in a stressful or difficult situation, how do you most frequently react?</p>
            <input type='radio' {...radioObj} id='determined' name='stress' value='determined'/>
            <label>Determination: I continue to confront the situation.</label>
            <input type='radio' {...radioObj} id='divorced' name='stress' value='defeat'/>
            <label>Defeat: I stop confronting the situation.</label>
            <input type='radio' {...radioObj} id='widowed' name='stress' value='anger'/>
            <label>Anger: I become upset at the situation.</label>
            <input type='radio' {...radioObj} id='single' name='stress' value='resourceful'/>
            <label>Resourcefulness: I seek help to confront the situation.</label>

            <p>Are you claustrophobic?</p>
            <input type='radio' {...radioObj} id='yes' name='phobia' value='yes'/>
            <label>Yes</label>
            <input type='radio' {...radioObj} id='no' name='phobia' value='no'/>
            <label>No</label>
            <input type='radio' {...radioObj} id='idk' name='phocia' value='idk'/>
            <label>I don't know</label>
        </div>
    )
}

export default RadioInput
