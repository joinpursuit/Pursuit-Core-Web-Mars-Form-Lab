import React from "react";
import Select from 'react-select';
import countriesList from "./countries list/countries"

//Creates options for select, however not using

// const months = [
//     { value: 'January', label: 'January' },
//     { value: 'Feburary', label: 'Feburary' },
//     { value: 'March', label: 'March' },
//     { value: 'April', label: 'April' },
//     { value: 'May', label: 'May' },
//     { value: 'June', label: 'June' },
//     { value: 'July', label: 'July' },
//     { value: 'August', label: 'August' },
//     { value: 'September', label: 'September' },
//     { value: 'October', label: 'October' },
//     { value: 'November', label: 'November' },
//     { value: 'December', label: 'December' },
//   ];

class Form extends React.Component{
    state={
        fullName: "",
        date:{},
        countries:null
    }

    handleChange = (e) => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCountries = countries => {
        this.setState(
          { countries },
          () => console.log(`Option selected:`, this.state.countries)
        );
      };


    render(){
        const {fullName, date, countries} = this.state;
        return(
        <div>
            <form>
               <input type="text" value={fullName} placeholder="Enter Full Name" name="fullName" onChange={this.handleChange}/>
               <input type="date" value={date} name="date" onChange={this.handleChange}/>
               <Select value={countries} onChange={this.handleCountries} options={countriesList}/>
            </form>
        </div>
        ) 
    }
}

export default Form;