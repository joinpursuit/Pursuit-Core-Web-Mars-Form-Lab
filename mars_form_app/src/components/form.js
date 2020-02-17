import React from "react";
import { countries } from "./countries";
import '../master/form.css'

// class component
class Form extends React.Component {
  state = {
    name: "",
    birthDate: "yyyy-MM-dd",
    country: "",
    dietaryPreference: "",
    whyMarsExpReason: "",
    formCompleted: false,
    formSubmitted: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formCompleted = e => {
    e.preventDefault();
    let {
      name,
      birthDate,
      country,
      dietaryPreference,
      whyMarsExpReason
    } = this.state;
    if (name && birthDate && country && dietaryPreference && whyMarsExpReason) {
      this.setState({ formCompleted: true });
    } else {
      this.setState({ formCompleted: false });
    }
  };

  populateSelect = () => {
    return countries.map(country => {
      return (
        <option value={country.name} key={country.code}>
          {country.name}
        </option>
      );
    });
  };

  handleFormSubmitted = e => {
    this.setState({formSubmitted: true});
  };

  populateSubmit = state => {
    let userInfo = [];
    for (let key in state) {
      userInfo.push(
        <p>
          {key}: {String(state[key])}
        </p>
      );
    }
    userInfo.push(
      <label>Are you sure the above information is correct?</label>
    );
    userInfo.push(
      <button type="click" onClick={this.handleFormSubmitted}>
        Confirm
      </button>
    );
    return userInfo;
  };

  render() {
    console.log(this.state);
    
    let {
      name,
      birthDate,
      country,
      dietaryPreference,
      whyMarsExpReason
    } = this.state;
    if(!this.state.formSubmitted){
        return (
          <div>
            <img src="https://i.pinimg.com/originals/e5/bd/23/e5bd23574cee3222e088a5de04c28eaf.jpg"></img>
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
                <br></br>
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
              <br></br>
              <label>
                Country:
                <select value={country} name="country" onChange={this.handleChange}>
                  <option value="" disabled>
                    Pick a country
                  </option>
                  {(country = this.populateSelect())}
                </select>
              </label>
              <br></br>
              <label>
                Dietary Preference?
                <select
                  value={dietaryPreference}
                  name="dietaryPreference"
                  onChange={this.handleChange}
                >
                  <option value="" disabled>
                    Pick a dietary preference
                  </option>
                  <option value="omnivore">Omnivore</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </label>
              <br></br>
              <label>
                Why do you want to be a Mars explorer?
                <br></br>
                <textarea
                  cols="30"
                  rows="5"
                  type="text"
                  value={whyMarsExpReason}
                  name="whyMarsExpReason"
                  placeholder="WHY?"
                  onChange={this.handleChange}
                ></textarea>
              </label>
              <br></br>
              <button type="submit">Submit</button>
            </form>
            {this.state.formCompleted ? (
              <ul>{this.populateSubmit(this.state)}</ul>
            ) : (
              <p>Enter all fields!</p>
            )}
          </div>
        );
    } else {
        return (<p>Thank you for your application.</p>)
    }
  } 
}

export default Form;
