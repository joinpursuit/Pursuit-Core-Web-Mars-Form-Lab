import React from "react";
import {countries} from "./countries"
// class component
class Form extends React.Component {
  state = {
    name: "",
    birthDate: "yyyy-MM-dd",
    country: "",
    dietaryPreference: "Omnivore",
    whyMarsExpReason: "",
    formCompleted: false,
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formCompleted = e => {
      e.preventDefault();
      let { name, birthDate, country, dietaryPreference, whyMarsExpReason } = this.state;
      console.log(this.state);
      
  }

  populateSelect = () => {
      return countries.map(country => {
        return (
        <option value={country.name} key={country.code}>{country.name}</option>
        )
      })
  }

  render() {
    let { name, birthDate, country, dietaryPreference, whyMarsExpReason } = this.state;
    return (
      <div>
        <h1>Mission to Mars Registration Form</h1>
        <form onSubmit={this.formCompleted}>
          <label>
            What is your name?
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              placeholder="Enter Name"
            />
          </label>
          <label>
            What is your date of birth?
            <input
              type="date"
              value={birthDate}
              name="birthDate"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Country:
            <select value={country} name="country" onChange={this.handleChange}>
                <option value="" disabled>Pick a country</option>
                {country = this.populateSelect()}
            </select>
          </label>
          <label>
              Dietary Preference?
              <select value={dietaryPreference} name="dietaryPreference" onChange={this.handleChange}>
                <option value="omnivore">Omnivore</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
          </label>
          <br></br>
          <label>
              Why do you want to be a Mars explorer?
              <input type="text" value={whyMarsExpReason} name="whyMarsExpReason" placeholder="WHY?" style={{width: "500px", height: "75px"}} onChange={this.handleChange}></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// names.map(function(name, index){
//     return <li key={ index }>{name}</li>;
//   })

export default Form;
