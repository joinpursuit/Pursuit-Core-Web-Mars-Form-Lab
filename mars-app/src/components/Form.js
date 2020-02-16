import React from 'react';
// import Select from 'react-select'
import countries from './Countries'


class Form extends React.Component{
    state = {
        name: "",
        birthday: "",
        country: null,
        diet: 'omnivore'
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

    handleCountry =(e)=>{
        this.setState({
            country: e.target.value
        })
        debugger
    }
    populateState = () =>{
        return countries.map(country =>{
            return <option value={country.name} key={country.code}>{country.name}</option>
        })
    }

    handleDiet =(e)=>{
        let {diet} = this.state
        console.log({
            diet: diet
        })
        this.setState({
            diet: e.target.value
        })
        debugger
    }


    render(){
        let {handleFullName, handleDOB, handleCountry, handleDiet} = this.state
        return(
                <div>
                    <label>
                        What is your name<input type="form" value={handleFullName} onChange={this.handleFullName} required></input>
                    </label>

                    <label>
                        What is your date of birth:
                        <input type="date" name="dateOfBirth" value={handleDOB} min="1900-01-01" max="2022-12-31" onChange={this.handleDOB}></input>
                    </label>

                    <label>
                        What is your country of origin?
                        <select value={handleCountry} onChange={this.handleCountry}>
                            {this.populateState()}
                        </select>
                    </label>

                    <label>
                        What are your dietry preferences? 
                        <select value={handleDiet} onChange={this.handleDiet}>
                            <option value='omnivore' name='handleDiet'> Omnivore </option>
                            <option value='vegeterian' name='handleDiet'> Vegeterian </option>
                            <option value='vegan' name='handleDiet'> Vegan </option>
                        </select>
                    </label>
                </div>
            )
        }

}


export default Form;