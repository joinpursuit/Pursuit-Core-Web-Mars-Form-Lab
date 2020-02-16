import React from 'react';
import countries from './../countries'
// import axios from 'axios';


// import { render } from 'react-dom';

class Form extends React.Component {
    state = {
        name: "",
        date: new Date().toLocaleString(),
        countries: [],
        diet: "vegan",
        body: ""

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    populateCountries =() => {
        
        countries.map(country => <option>{country.name}
        </option>)
    }


    render(){
        console.log(this.state)
        let { name, date, countries, diet, body } = this.state

        return(
            <div>
                <h1>Mission To Mars Registration Form</h1>
                <form>
                <label>
                What is your name?
                <input type="text" value={name} name="name" onChange={this.handleChange} />
                </label>
                <label>
                What is your date of birth?
                <input type="date" value={date} name="date" min="1900-01-01" onChange={this.handleChange} />
                </label>
                <label>
                What is your country of origin? 
                <select value={countries}>
                    {this.populateCountries()}
                </select>
                </label>
                <label>
                What is your dietary preference?
                <select name="diet" value={diet} onChange={this.handleChange}>
                    <option value="omnivore">Omnivore</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>
                </label>
                <label>
                Why do you want to be a Mars explorer? 
                <textarea name="body" value={body}rows="10" cols="80" onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


export default Form;