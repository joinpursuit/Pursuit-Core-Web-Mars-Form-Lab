import React from 'react';
// import Select from 'react-select'
import countries from './Countries'


class Form extends React.Component{
    state = {
        name: "",
        birthday: "",
        country: null,
        diet: 'omnivore',
        explorerResponse: "",
        formCompleted: false,
        // completed: false
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

    handleExplorer = (e) => {
        this.setState({
            explorerResponse: e.target.value
        })
        debugger
    }


    handleSubmit = () => {
        const { formCompleted } = this.state;
        if (formCompleted === false) {
          this.setState({
            formCompleted: true
          });
        }
      };


      handleForm = (e) => {
        e.preventDefault();
        let {
            handleFullName,
            handleDOB,
            handleCountry,
            handleDiet,
            handleExplorer,
            formCompleted
        } = this.state;
        console.log({
          full_name: handleFullName,
          date: handleDOB,
          country: handleCountry,
          diet: handleDiet,
          response: handleExplorer,
          formCompleted: formCompleted
        });
      };

      handleReset = () => {
        const {
            handleFullName,
            handleDOB,
            handleCountry,
            handleDiet,
            handleExplorer,
            } = this.state;
        this.setState({
            handleFullName: { handleFullName },
            handleDOB: { handleDOB },
            handleCountry: { handleCountry },
            handleDiet: { handleDiet },
            handleExplorer: { handleExplorer },
            reset: true
        });
      };

      printPTags = () => {
          let { handleFullName, handleDOB, handleCountry, handleDiet, handleExplorer } = this.state
            return ( 
                <>
                <p> Name: { handleFullName } </p>
                <p> Date of Birth: { handleDOB } </p>
                <p> Country of Origin: { handleCountry } </p>
                <p> Dietry: { handleDiet } </p>
                <p> Text Form: { handleExplorer } </p>
                <p> </p>
                </>
            ) 
        };

        formCompleted = (e) => {
            e.preventDefault();
            this.setState({
                completed: true
            })
            const { handleFullName, handleDOB, handleCountry, handleDiet, handleExplorer } = this.state;
                return (
        <div>
            <p>
                <b>Form Completed.</b>
            </p>
        <h2>Name: { handleFullName }</h2>
        <p>DOB: { handleDOB }</p>
        <p>Country:{ handleCountry }</p>
        <p>Dietary Preferences: { handleDiet }</p>
        <p>Your Response: { handleExplorer }</p>
        <p>Is all of your information correct?</p>
        <button type="submit" onClick={this.handleReset}>
          Submit!
        </button>
      </div>
    );
        }


      


    render() {
        let {handleFullName, handleDOB, handleCountry, handleDiet, handleExplorer} = this.state
        return(
                <div>   

                    <form onSubmit={this.handleForm}>


                    <label>
                        What is your name? <input type="form" value={handleFullName} onChange={this.handleFullName} required></input>
                    </label>

                    <label>
                        What is your date of birth:
                        <input type="date" name="dateOfBirth" value={handleDOB} min="1900-01-01" max="2022-12-31" onChange={this.handleDOB} required></input>
                    </label>

                    <label>
                        What is your country of origin?
                        <select value={handleCountry} onChange={this.handleCountry} required>
                            {this.populateState()}
                        </select>
                    </label>

                    <label>
                        What are your dietry preferences? 
                        <select value={handleDiet} onChange={this.handleDiet} required>
                            <option value='omnivore' name='handleDiet'> Omnivore </option>
                            <option value='vegeterian' name='handleDiet'> Vegeterian </option>
                            <option value='vegan' name='handleDiet'> Vegan </option>
                        </select>
                    </label>

                    <label> 
                    Why do you want to be a Mars explorer? 
                    <input class="explorerInput" type="form" value={handleExplorer} onChange={this.handleExplorer} required></input>
                    </label>


                    <button type="submit" onClick={this.handleSubmit}>
                        Submit
                    </button>

                    {this.state.formCompleted === true ? this.formCompleted() : false}
                    {this.state.reset === true} (
                        
                    )}
                   

                </form>
            </div>     
        )
    }
}


export default Form;