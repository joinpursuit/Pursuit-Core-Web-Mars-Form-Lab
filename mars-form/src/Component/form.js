import React , {Component} from "react";
import countries from "./countries"


class Form extends Component{
    state =  {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        countries: countries,
        country: "",
        dietPref: "omnivore",
        whyMars: ""

    }
    handleFirstName = e =>{
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastName = e =>{
        this.setState({
            lastName: e.target.value
        })
    }
    handleDateOfBirth = e =>{
        this.setState({
            dateOfBirth: e.target.value
        })
    }
    handleSelect = e =>{
        e.preventDefault()
        this.setState({
            country: e.target.value
        })
    }
   
    populateSelect = () =>{   
     return this.state.countries.map(country =>{
         return <option value={country.name} key ="i">{country.name}</option>
     }) 
    }
    handleDiet = e =>{
        e.preventDefault()
        this.setState({
            dietPref: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let { firstName, lastName, dietPref, dateOfBirth, country, whyMars} = this.state;
        console.log({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            option:dietPref,
            country: country,
            whyMars: whyMars
        })
    }
    handleMars = e => {
        
        this.setState({
             whyMars: e.target.value
        })
    }

    render(){
        console.log(this.state.whyMars)

        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Mars Registration form</h1>
                    <label>
                    Please Enter The Information
                    <br></br>
                     First Name : <input placeholder = "insert first name" onChange = {this.handleFirstName} required/>
                     <br/>
                     Last Name : <input placeholder = "insert last name" onChange = {this.handleLastName} required/>
                     <br/>
                    </label>
                    <label>
                        Date of Birth: <input type="date" onChange = {this.handleDateOfBirth} required/>
                    </label>
                    <br/>
                    <label>
                        Country of Origin 
                        <select value = {this.state.country} onChange = {this.handleSelect} key = "i" required>
                            {this.populateSelect()}

                        </select>     
                        <br/>   
                    </label>
                    <label>
                        Dietary Preferences
                        <select value = {this.state.dietPref} onChange = {this.handleDiet} required>
                            <option value="omnivore">Omnivore</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Why Do You Want To be A Mars Explorer?
                        <br/>
                        <textarea id="text" type="text"  onChange = {this.handleMars} required/>
                    </label>
                    <br/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
        
    }
}
export default Form