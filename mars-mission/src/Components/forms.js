import React from "react";
import { countriesList } from "./countriesList/countries";
import { diets } from "./Dietary/diets";
import "./css/forms.css";

class Form extends React.Component {
  state = {
    fullName: "",
    date: {},
    countries: {},
    diet: {},
    bodyResponse: "",
    formCompleted: false
  };

  handleChange = e => {
    // debugger;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  populateDiets = () => {
    return diets.map(diet => {
      return <option value={diet}>{diet}</option>;
    });
  };

  populateCountries = () => {
    return countriesList.map(countries => {
      return <option value={countries.name}>{countries.name}</option>;
    });
  };

  handleSubmit = () => {
    const { formCompleted } = this.state;
    if (formCompleted === false) {
      this.setState({
        formCompleted: true
      });
    }
    // debugger;
  };

  completedForm = () => {
    const { fullName, date, countries, diet, bodyResponse } = this.state;
    // debugger;
    return (
      <div>
        <p>
          <b>Form Completed. Please check your information below.</b>
        </p>
        <h3>Name: {fullName}</h3>
        <p>DOB: {date}</p>
        <p>Country:{countries}</p>
        <p>Dietary Preferences: {diet}</p>
        <p>Your Response: {bodyResponse}</p>
        <p>Is all of your information correct?</p>
        <button type="submit" onClick={this.handleReset}>
          Submit Your Application
        </button>
      </div>
    );
  };

  handleReset = () => {
    const {
      fullName,
      date,
      countries,
      diet,
      bodyResponse,
      formCompleted
    } = this.state;
    this.setState({
      fullName: "",
      date: {},
      countries: {},
      diet: {},
      bodyResponse: "",
      formCompleted: false,
      reset: true
    });
  };

  handleForm = e => {
    // debugger;
    e.preventDefault();
    let {
      fullName,
      date,
      countries,
      diet,
      bodyResponse,
      formCompleted
    } = this.state;
    // debugger;
    console.log({
      full_name: fullName,
      date: date,
      country: countries,
      diet: diet,
      response: bodyResponse,
      formCompleted: formCompleted
    });
  };

  render() {
    const { fullName, date, countries, diet, bodyResponse } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleForm}>
          <h4>Fill Out Name:</h4>
          <input
            type="text"
            value={fullName}
            placeholder="Enter Full Name"
            name="fullName"
            onChange={this.handleChange}
            required
          />
          <h4>Date of Birth:</h4>
          <input
            type="date"
            value={date}
            name="date"
            onChange={this.handleChange}
            required
          />
          <h4>Country of Origin:</h4>
          <select
            value={countries}
            name="countries"
            onChange={this.handleChange}
          >
            {this.populateCountries()}
          </select>
          <h4>Select Dietary Preferences:</h4>
          <select value={diet} name="diet" onChange={this.handleChange}>
            {this.populateDiets()}
          </select>
          <h4>Why Do You Want to be a Mars Explorer?:</h4>
          <input
            id="inputText"
            type="text"
            value={bodyResponse}
            name="bodyResponse"
            placeholder="Tell us why?"
            onChange={this.handleChange}
            required
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          {this.state.formCompleted === true ? this.completedForm() : false}
          {this.state.reset === true ? (
            <p>Thank you for submitting your application.</p>
          ) : (
            false
          )}
        </form>
      </div>
    );
  }
}

export default Form;
