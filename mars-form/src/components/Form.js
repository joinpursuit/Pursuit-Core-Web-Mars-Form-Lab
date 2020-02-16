import React from "react";
import countries from "./country"
class Form extends React.Component {
  state = {
    name : "",
    dateofbirth : "yyyy/mm/dd",
    country: "",
    dietary:""
  }
  createOptions = () => {
    return countries.map(country=>{
      return(
        <option value ={country.name} key={country.code} id={country.code}>{country.name}</option>

      )
    })
  }
  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  }

  
  render(){
    return(
      <div>
        <h1>Mars Form</h1>
        <form>
        <label>
          Name: 
          <input 
          type="text"
          placeholder="name"
          value={this.state.name} 
          name="name"
          onChange={this.handleChange}
            />
        </label>
        <br/>
        <label>
          Birth Day:
          <input
          type="date"
          name="dateofbirth"
          placeholder=""
          value={this.state.dateofbirth}
          onChange={this.handleChange}
          />
        </label>
        <br/>

        <label>
        Countries: 
        <select
        name="country"
        id="counties"
        value={this.state.country}
        onChange={this.handleChange}
        >
        <option disabled  value="">pick country</option>
         {this.createOptions()}
        </select>
        </label>

        <br/>

        <label>
          Dietary: 
        <select
        name="dietary"
        value={this.state.dietary}
        onChange={this.handleChange}
        >
          <option disabled value="">Dietary</option>
          <option value="omnivore">Omnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
        </label>

      <br/>
      
        </form>
      </div>

      
    )
  }

}


export default Form;