import React from "react";

const confirmation = ({props, onSubmitClick}) => {
    // for (let key in props) {
    //     return (<li></li>)    
    // }
    console.log(props)
    const submitConfirmation = () => {
        onSubmitClick()
    }
    debugger
    return (
        <div className='formConfirmation'>
        <ul>

        </ul>
        <button type="submit" onClick={submitConfirmation}>Confirm Submission</button>    
        </div>
    )
}

export default confirmation