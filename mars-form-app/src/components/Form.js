import React from 'react';
// import { render } from 'react-dom';

class Form extends React.Component {

    render(){
        return(
            <div>
                <h1>Mission To Mars Registration Form</h1>
                <form>
                <label>
                What is your name?
                <input type="text" value="name" />
                </label>
                <label>
                What is your date of birth?
                <input type="date" name="date" min="1900-01-01" />
                </label>
                <label>
                What is your country of origin? 
                <select>
                    <option value="countries">Countries</option>
                </select>
                </label>
                <label>
                What is your dietary preference?
                <select>
                    <option value="omnivore">Omnivore</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>
                </label>
                <label>
                Why do you want to be a Mars explorer? 
                <textarea rows="10" cols="80" />
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


export default Form;