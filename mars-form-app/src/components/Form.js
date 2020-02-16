import React from 'react';
import countries from './countries'
import '../components/Form.css'
// import axios from 'axios';


// import { render } from 'react-dom';

class Form extends React.Component {
    state = {
        name: "",
        date: new Date().toLocaleDateString(),
        country: "United States",
        diet: "vegan",
        body: "",
        q1: "yes",
        q2: "Unmarried",
        q3: "defeat",
        q4: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, date, country, diet, body, q1, q2, q3 } = this.state

        console.log("this is the handleSubmit" + {
            fullname: name,
            dob: date,
            origin: country,
            food: diet,
            summary: body,
            breath: q1,
            married: q2,
            reaction: q3
        })
    }

    populateCountries =() => {
        return countries.map(country => <option key={country.code} value={country.name}>{country.name}</option>
        )
    }


    render(){
        console.log(this.state)
        let { name, date, country, diet, body, q1, q2, q3, q4} = this.state

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
                <div className="radio">
                        Can you breathe under water longer than one minute?
                    <label>
                    Yes
                        <input type="radio" name="q1" value="yes" checked={q1 === "yes"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    No
                        <input type="radio" name="q1" value="no" checked={q1 === "no"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    I don't know
                        <input type="radio" name="q1" value="I don't know" checked={q1 === "I don't know"} onChange={this.handleChange}/>
                    </label>
                    <br />
                    What is your marital status?
                    <label>
                    Married
                        <input type="radio" name="q2" value="Married" checked={q2 === "Married"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Unmarried
                        <input type="radio" name="q2" value="Unmarried" checked={q2 === "Unmarried"} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <br />
                    When you are in a stressful or difficult situation, how do you most frequently react?
                    <div className="reaction">
                    <label>
                    Determination: I continue to confront the situation
                    <input type="radio" name="q3" value="determination" checked={q3 === "determination"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Defeat: I stop confronting the situation
                    <input type="radio" name="q3" value="defeat" checked={q3 === "defeat"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Anger: I become upset at the situation
                    <input type="radio" name="q3" value="anger" checked={q3 === "anger"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Resourcefulness: I seek help to confront the situation
                    <input type="radio" name="q3" value="resourcefulness" checked={q3 === "resourcefulness"} onChange={this.handleChange}/>
                    </label>
                    </div>
          
                </div>
                <div className="checkbox">
                    Does your family have a history of (check all that apply)
                    <label>
                    Cancer
                    <input type="checkbox" name="q4" value="cancer" onChange={this.handleChange}/>
                    </label>
                    <label>
                    Heart Disease
                    <input type="checkbox" name="q4" value="heart" onChange={this.handleChange}/>
                    </label>
                    <label>
                    Diabetes
                    <input type="checkbox" name="q4" value="diabetes" onChange={this.handleChange}/>
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