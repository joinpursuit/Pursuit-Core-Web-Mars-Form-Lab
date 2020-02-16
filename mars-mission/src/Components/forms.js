import React from "react";
import { countriesList } from "./countriesList/countries";
import { diets } from "./Dietary/diets";

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
      return <option value={countries.code}>{countries.name}</option>;
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
    debugger
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
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            value={fullName}
            placeholder="Enter Full Name"
            name="fullName"
            onChange={this.handleChange}
            required
          />
          <input
            type="date"
            value={date}
            name="date"
            onChange={this.handleChange}
            required
          />
          <select
            value={countries}
            name="countries"
            onChange={this.handleChange}
          >
            {this.populateCountries()}
          </select>
          <select value={diet} name="diet" onChange={this.handleChange}>
            {this.populateDiets()}
          </select>
          <input
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
          {this.state.formCompleted === true ? <p>FORM COMPLETED</p> : false}
        </form>
      </div>
    );
  }
}

export default Form;
