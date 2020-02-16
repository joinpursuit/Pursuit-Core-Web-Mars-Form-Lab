import React from "react";

class Form extends React.Component{

state = {firstName: "", lastName: "", date: ""}
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
} 


render() {
    console.log(this.state)
    return(
        <>
         <h1>Mission to Mars Registration From</h1>
            <div>
                <form>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                    <br/>
                    <label for="start">Start date:</label>
                    <input type="date" id="start" name="trip-start" value={this.state.date} min="1900-01-01" max="2020-02-15"/>
                </form>
            </div>
    </>
    ) 
}


}





export default Form;
