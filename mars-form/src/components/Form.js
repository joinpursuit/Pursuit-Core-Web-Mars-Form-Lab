import React from "react";
import countries from "./country";


class Form extends React.Component {
  state = {
    name : "",
    dateofbirth : "yyyy-MM-dd",
    country: "",
    dietary:"",
    marsResponse:"",
    formCompleted: false,
    formSubmitted: true
  }
  createOptions = () => {

    return countries.map(country=>{
      return(
        <option value ={country.name} key={country.code} id={country.code}>{country.name}</option>

      )
    })
  }
  checkCompleted = (e) => {
    e.preventDefault()

    if(this.state.name && this.state.dateofbirth && this.state.country && this.state.marsResponse) {
      this.setState({
        formCompleted: true

      })

    }
  
  }

  populateAnswer = () => {

    if(this.state.formCompleted){

      return(
        <>
        <p> {this.state.name}  </p>
        <p> {this.state.country} </p>
        <p> {this.state.dietary}</p> 
        <p> {this.state.marsResponse}</p>
        <p>Are you sure if the information above is correct!</p>
        <button
        onClick={this.formSubmitted}
        >Confirm
        </button>
           </>
       
      )
    }
  }

  formSubmitted = () => {
    this.setState({formSubmitted: true})
  }


  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  }
  
  render(){
    if(!this.state.formSubmitted){


  
    return(
      <div>
        <h1>Mars Form</h1>
        <form
        onSubmit={this.checkCompleted}>
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

       <input
       name="marsResponse"
       id="marsResponse"
       type="text"
       value={this.state.marsResponse}
       onChange={this.handleChange}
       />

       <br/>

       <button
       name="formCompleted"
       type="submit"
       
       >Submit</button>
      
        </form>
      <div>
        {this.populateAnswer()}
        
      </div>
      </div>

      
    )

  }else{
return(
  <p>THANK YOU FOR Submit your form</p>
)
  }
}

}


export default Form;