import React, { createElement } from "react";
import Select from 'react-select';

const months = [
    { value: 'January', label: 'January' },
    { value: 'Feburary', label: 'Feburary' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

class Form extends React.Component{
    state={
        fullName: "",
        month:null
    }

    handleChange = (e) => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMonthChange = month => {
        this.setState(
          { month },
          () => console.log(`Option selected:`, this.state.month)
        );
      };


    render(){
        const {fullName, month} = this.state;
        return(
        <div>
            <form>
               <input type="text" value={fullName} placeholder="Enter Full Name" name="fullName" onChange={this.handleChange}/>
               <Select type="date" value={month} name="month" onChange={this.handleMonthChange} options={months}/>
            </form>
        </div>
        ) 
    }
}

export default Form;