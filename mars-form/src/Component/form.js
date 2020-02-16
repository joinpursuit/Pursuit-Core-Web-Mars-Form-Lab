import React , {Component} from "react";
import countries from "./countries"


class Form extends Component{
    state =  {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        countries: countries,
        dietPref: "omnivore"

    }
    handleFirstName = e =>{
        this.setState({
            firsName: e.target.value
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

    render(){

        
        return(
            <div>
                <form>
                <h1>Mars Registration form</h1>
                    <label>
                    Please Enter The Information
                    <br></br>
                     First Name : <input placeholder = "insert first name" onChange = {this.handleFirstName}/>
                     <br/>
                     Last Name : <input placeholder = "insert last name" onChange = {this.handleLastName}/>
                     <br/>
                    </label>
                    <label>
                        Date of Birth: <input type="date" onChange = {this.handleDateOfBirth}/>
                    </label>
                    <br/>
                    <label>
                        Country of Origin 
                        <select value = {this.state.country} onChange = {this.handleSelect} key = "i">
                            {this.populateSelect()}

                        </select>     
                        <br/>   
                    </label>
                    <label>
                        Dietary Preferences
                        <select value = {this.state.dietPref}>
                            <option>Omnivore</option>
                            <option>Vegetarian</option>
                            <option>Vegan</option>
                        </select>
                    </label>
                </form>
            </div>
        )
        
    }
}
export default Form