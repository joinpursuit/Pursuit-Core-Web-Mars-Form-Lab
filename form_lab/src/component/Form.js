import React from "react";
import countries from "./countries";

class Form extends React.Component {
  state = {
    name: "",
    dob: "",
    origin: "",
    dietary: "",
    text: "",
    completed: false,
    confirmed: false
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
  handler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearPage = () => {
    return (
      <>
        <p>Thank You For Submitting Your Form</p>
      </>
    );
  };
  isConfirmed = () => {
    this.setState({
      confirmed: true
    });
  };
  createPs = () => {
    let { name, dob, origin, dietary, text } = this.state;
    return (
      <>
        <p>name:{name}</p>
        <p>Dob:{dob}</p>
        <p>Origin:{origin}</p>
        <p>Dietary:{dietary}</p>
        <p>Text:{text}</p>
        <p>Are you sure this information is correct</p>
        <button onClick={this.isConfirmed}>confirm</button>
      </>
    );
  };
  formCompleted = e => {
    e.preventDefault();

    this.setState({
      completed: true
    });
  };

  render() {
    let { name, dob, origin, dietary, text, completed, confirmed } = this.state;
    console.log(dietary);
    if (confirmed) {
      return (
        <div>
          <p>Thank you for completing the form</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Mission to Mars Registration Form.</h1>

          <form onSubmit={this.formCompleted}>
            <label>
              What is your name?
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handler}
              />
            </label>
            <br />

            <label>
              What is your date of birth?
              <input
                type="date"
                id="start"
                name="dob"
                value={dob}
                min="1990-01-01"
                max="2020-12-31"
                onChange={this.handler}
              />
            </label>
            <br />

            <label>
              What is your country of origin?
              <select value={origin} name="origin" onChange={this.handler}>
                <option disabled>Select a country</option>
                {this.populateSelect()}
              </select>
            </label>
            <br />

            <label>
              What is your dietary preference?
              <select value={dietary} name="dietary" onChange={this.handler}>
                <option disabled value="">
                  Please Pick one
                </option>
                <option>omnivore</option>
                <option>vegetarian</option>
                <option>vegan</option>
              </select>
            </label>
            <br />
            <label>
              Why do you want to be a Mars explorer?
              <input
                type="text"
                name="text"
                value={text}
                onChange={this.handler}
              />
            </label>
            {completed ? this.createPs() : null}

            {completed ? null : <button type="submit">Submit</button>}
          </form>
        </div>
      );
    }
  }
}

export default Form;
