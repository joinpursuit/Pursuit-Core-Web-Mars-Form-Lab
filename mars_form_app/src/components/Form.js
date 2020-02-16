import React, {Component} from 'react';
// import axios from 'axios';
import countries from "./countries"

class Form extends Component{
    state = {
        name: "",
        birthday: "",
        countries: countries,
        selectedCountry: "United States",
        diet: "",
        explorer: "",
        formCompleted: false,
        formSubmitted: false
    }

    // populateCountry() {
    //     // e.preventDefault();
    //     axios.get("http://vocab.nic.in/rest.php/country/json").then(res => {
    //         let {countries} = res.data;
    //         // debugger
    //         // this.setState({countries});
    //     })
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formCompleted: !this.state.formCompleted
        })
        if(this.state.formCompleted === true) {
            let div = document.querySelector("#formSubmitted");
            div.hidden = false;
        }
    }

    handleSubmitComplete = (e) => {
        e.preventDefault();
        let clearPage = document.querySelector("#inputPage");
        let p = document.querySelector("#applicationClose");
        clearPage.innerHTML = "";
        p.hidden = false;
    }
    
    render(){
        console.log(this.state);
        let { name, birthday, selectedCountry, diet, explorer } = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Mission to Mars Registration Form
                    </h1>
                    <div id="inputPage">
                        <label>
                            Name:
                            <input type="text" placeholder="What's your name?" name="name" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <label>
                            Date of Birth:
                            <input type="date" name="birthday" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <label>
                            Country of Origin:
                            {/* <select id="countryList" onClick={this.populateCountry}> */}
                            <select id="countryList" name="selectedCountry" onChange={this.handleChange}>
                                <option disabled>Select Country</option>
                                { this.state.countries.map(country => 
                                <option key={country.code}>{country.name}</option>
                                ) 
                                }
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Dietary Preference:
                            <select name="diet" onChange={this.handleChange}>
                                <option disabled>Select Dietary Preference</option>
                                <option>Omnivore</option>
                                <option>Vegetarian</option>
                                <option>Vegan</option>
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Why do you want to be a Mars explorer?
                            <input type="text" name="explorer" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <button type="submit">Submit</button>

                        <div hidden id="formSubmitted">
                            <p>Name: {name}, Birthday: {birthday}, Country of Origin: {selectedCountry}, Dietary Preference: {diet}, Why do you want to be a Mars explorer?: {explorer} </p>
                            <p>Please confirm this information is correct.</p>
                            <button type="button" onClick={this.handleSubmitComplete}>Confirm</button>
                        </div>
                    </div>

                    <p hidden id="applicationClose">Thank you for your application!</p>
                </form>
            </div>
        )
    }

    
    
          
        
    

    

}

export default Form;
