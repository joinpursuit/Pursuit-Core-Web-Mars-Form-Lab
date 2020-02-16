import React , {Component} from "react";
import axios from 'axios'


class Form extends Component{
    state =  {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        countryOfOrigin:"Afghanistan"

    }
    handleFirstName = e =>{
        this.setState({
            firsName: e.target.value
        })
    }
    handleLastName = e =>{
        this.setState({
            lastName: e.target.value
        })
    }
    handleDateOfBirth = e =>{
        this.setState({
            dateOfBirth: e.target.value
        })
    }
    changeCountry =  (e) =>{
        this.setState({
            countryOfOrigin: e.target.value
        })
    }
    render(){

        
        return(
            <div>
                <form>
                <h1>Mars Registration form</h1>
                    <label>
                    Please Enter The Information
                    <br></br>
                     First Name : <input placeholder = "insert first name" onChange = {this.state.handleFirstName}/>
                     <br/>
                     Last Name : <input placeholder = "insert last name" onChange = {this.state.handleLastName}/>
                     <br/>
                    </label>
                    <label>
                        Date of Birth: <input type="date" onChange = {this.state.handleDateOfBirth}/>
                    </label>
                    <label>
                        Country of Origin <select value ="Afghanistan" onChange = {this.state.countryOfOrigin}>
                            <option>Bangladesh</option>
                            <option>USA</option>
                            <option>India</option>
                        </select>
                    </label>
                </form>
            </div>
        )
        
    }
}
export default Form