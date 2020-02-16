import React from "react";
import { countriesList } from "./countriesList/countries";
import { diets } from "./Dietary/diets";

class Form extends React.Component {
  state = {
    fullName: "",
    date: {},
    countries: {},
    diet: {}
  };

  handleChange = e => {
    debugger;
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

  render() {
    const { fullName, date, countries, diet } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={fullName}
            placeholder="Enter Full Name"
            name="fullName"
            onChange={this.handleChange}
          />
          <input
            type="date"
            value={date}
            name="date"
            onChange={this.handleChange}
            xs
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
        </form>
      </div>
    );
  }
}

export default Form;
