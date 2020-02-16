import React from 'react'

class Form extends React.Component{
    state ={
        firstName:"",
        lastName:""
    }
    handleChange = (e) =>{
        this.setState=({
            [e.target.name]:e.target.value
        })
    }
    // let{firtName,lastName} = this.state

    render(){
        return(
            <form>
                <label>
                    First Name:
                    <input type="text" name="firstName" placeholder= "First Name" value={this.state.firstName} onChange={this.handleChange}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" placeholder= "Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                </label>
            </form>
        )
    }

}

export default Form;