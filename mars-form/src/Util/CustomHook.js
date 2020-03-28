import {useState} from 'react'

function customHook(initalValue) {
    const [value, setValue] = useState(initalValue);
    
    const reset = () =>{
        setValue(initalValue)
    };

    const bind = {
        value,
        onChange: e =>{
            setValue(e.target.value)
        }
    }
    return [value, reset, bind]
}

export default customHook
