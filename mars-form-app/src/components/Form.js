import React from 'react';
import countries from './countries'
import '../components/Form.css'
// import axios from 'axios';


// import { render } from 'react-dom';

class Form extends React.Component {
    state = {
        name: "",
        date: new Date().toLocaleString(),
        country: "United States",
        diet: "vegan",
        body: ""

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, date, country, diet, body } = this.state

        console.log({
            fullname: name,
            dob: date,
            origin: country,
            food: diet,
            summary: body
        })
    }

    populateCountries =() => {
        return countries.map(country => <option value={country.name}>{country.name}</option>
        )
    }


    render(){
        console.log(this.state)
        let { name, date, country, diet, body } = this.state

        return(
            <div>
                <h1>Mission To Mars Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="personalInfo">
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
                <select value={ country } name="country" onChange={this.handleChange}>
                    {this.populateCountries()}
                </select>
                </label>
                </div>
                <div className="diet">
                <label>
                What is your dietary preference?
                <select name="diet" value={diet} onChange={this.handleChange}>
                    <option value="omnivore">Omnivore</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>
                </label>
                </div>
                <div className="question">
                <label>
                Why do you want to be a Mars explorer? 
                <br />
                <br />
                <textarea name="body" value={body}rows="10" cols="80" onChange={this.handleChange}/>
                </label>
                </div>
                <div className="button">
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}


export default Form;