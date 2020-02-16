import React from 'react';

class Form extends React.Component{
    state = {
        name: "",
        birthday: ""
    }

    handleFullName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    handleDOB = (e) =>{
        this.setState({
            birthday: e.target.value
        })
        debugger
    }
    render(){
        let {handleFullName, handleDOB} = this.state
        return(
                <div>
                    <label>
                        What is your name<input type="form" value={handleFullName} onChange={this.handleFullName} required></input>
                    </label>
                    
                    <label>
                        What is your date of birth:
                        <input type="date" name="dateOfBirth" value={handleDOB} min="1900-01-01" max="2020-12-31" onChange={this.handleDOB}></input>
                    </label>

                    <label>
                        What is your country of origin
                        <select>
                            
                        </select>
                    </label>
                </div>
            )
        }

}


export default Form;