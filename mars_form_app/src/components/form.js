import React from "react";
import {countries} from "./countries"
// class component
class Form extends React.Component {
  state = {
    name: "",
    birthDate: "yyyy-MM-dd",
    country: "Afghanistan"
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  populateSelect = () => {
      return countries.map(country => {
        return (
        <option value={country.name} key={country.code}>{country.name}</option>
        )
      })
  }

  render() {
    let { name, birthDate, country } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Mission to Mars Registration Form</h1>
        <form onSubmit={e => e.preventDefault()}>
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
                {country = this.populateSelect()}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

// names.map(function(name, index){
//     return <li key={ index }>{name}</li>;
//   })

export default Form;
