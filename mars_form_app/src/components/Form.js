import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    state = {
        countryList: []
    }

    populateCountry(e) {
        e.preventDefault();
        axios.get("http://vocab.nic.in/rest.php/country/json").then(res => {
            const countryList = res.data;
            this.setState({ countryList });
        })
    }

    
    render(){
        console.log(this.state);
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
                        <select id="countryList">
                            <option disabled>Select Country</option>
                            { this.state.countryList.map(country => <option>{country}</option>) }
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
