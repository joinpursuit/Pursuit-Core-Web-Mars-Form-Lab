import React, {Component} from 'react';
// import axios from 'axios';
import countries from "./countries"

class Form extends Component{
    state = {
        countries: countries
    }

    // populateCountry() {
    //     // e.preventDefault();
    //     axios.get("http://vocab.nic.in/rest.php/country/json").then(res => {
    //         let {countries} = res.data;
    //         // debugger
    //         // this.setState({countries});
    //     })
    // }

    
    render(){
        // console.log(this.state);
        return(
            <div>
                <form>
                    <h1>
                        Mission to Mars Registration Form
                    </h1>
                    <label>
                        Name:
                        <input type="text" placeholder="What's your name?"></input>
                    </label>
                    <br></br>
                    <label>
                        Date of Birth:
                        <input type="date"></input>
                    </label>
                    <br></br>
                    <label>
                        Country of Origin:
                        {/* <select id="countryList" onClick={this.populateCountry}> */}
                        <select id="countryList">
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
                        <select >
                            <option disabled>Select Dietary Preference</option>
                            <option>Omnivore</option>
                            <option></option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }

    
    
          
        
    

    

}

export default Form;
