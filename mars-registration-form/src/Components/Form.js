import React from "react";
import listOfCountries from "./listOfCountries";

class Form extends React.Component{

state = {
    firstName: "", 
    lastName: "", 
    dateOfBirth: "", 
    country: "", 
    dietaryOptions: "",
    question: "",
    formCompleted: false
}
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
} 

handleSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
        return {
            formCompleted: !prevState.formCompleted
        }
    })
}

handleFormSubmitted = (event) => {

}

render() {
    console.log(this.state)
    return(
        <>
         <h1>Mission to Mars Registration From</h1>
            <div>
                <form required >
                <label>
                    First Name:
                    <input required type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <input required type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                </label>
                    <br/>
                    <label for="start">
                    Start date:
                    <input required type="date" id="start" name="dateOfBirth" value={this.state.dateOfBirth} min="1900-01-01" onChange={this.handleChange} max="2020-02-15"/>
                    </label>
                    <br/>
                    <label>
                    Country:
                        <select required name = "country" value={this.state.country} onChange={this.handleChange}>
                            {listOfCountries.map(country => {
                                return <option name={country.name} key ={country.name}>{country.name}</option>
                            })}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Dietary Preference: 
                        <select required name="dietaryOptions" value={this.state.dietaryOptions} onChange={this.handleChange}>
                            <option value="Omnivore">Omnivore</option>
                            <option value="Vegitarian">Vegitarian</option>
                            <option value="Vegan">Vegan</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Why Do You Want to be a Mars Explorer?: 
                        <input required type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="Submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                <button>Form Submitted</button>
            </div>
    </>
    ) 
}


}

export default Form;
