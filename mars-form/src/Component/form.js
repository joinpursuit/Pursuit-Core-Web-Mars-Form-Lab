import React , {Component} from "react";
import countries from "./countries"


class Form extends Component{
    state =  {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        countries: countries,
        country: "",
        dietPref: "omnivore",
        whyMars: "",
        formCompleted: false,

    }
    handleFirstName = e =>{
        this.setState({
            firstName: e.target.value
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
    handleSelect = e =>{
        e.preventDefault()
        this.setState({
            country: e.target.value
        })
    }
   
    populateSelect = () =>{   
     return this.state.countries.map(country =>{
         return <option value={country.name} key ="i">{country.name}</option>
     }) 
    }
    handleDiet = e =>{
        e.preventDefault()
        this.setState({
            dietPref: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let { firstName, lastName, dietPref, dateOfBirth, country, whyMars} = this.state;
        console.log({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            option:dietPref,
            country: country,
            whyMars: whyMars,
            onChange:this.handleChange
        })
    }
    handleMars = e => {
        
        this.setState({
             whyMars: e.target.value
        })
    }
    handleChange = e => {
        //this is the outline to handle the radio buttons
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        console.log(this.state.whyMars)

        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Mars Registration form</h1>
                    <label>
                    Please Enter The Information
                    <br></br>
                     First Name : <input placeholder = "insert first name" onChange = {this.handleFirstName} required/>
                     <br/>
                     Last Name : <input placeholder = "insert last name" onChange = {this.handleLastName} required/>
                     <br/>
                    </label>
                    <label>
                        Date of Birth: <input type="date" onChange = {this.handleDateOfBirth} required/>
                    </label>
                    <br/>
                    <label>
                        Country of Origin 
                        <select value = {this.state.country} onChange = {this.handleSelect} key = "i" required>
                            {this.populateSelect()}

                        </select>     
                        <br/>   
                    </label>
                    <label>
                        Dietary Preferences
                        <select value = {this.state.dietPref} onChange = {this.handleDiet} required>
                            <option value="omnivore">Omnivore</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Why Do You Want To be A Mars Explorer?
                        <br/>
                        <textarea id="text" type="text"  onChange = {this.handleMars} required/>
                    </label>
                    <br/>
                    <label>
                        1.  Can you Breathe Underwater for longer then a minute?
                        <br/>
                            <label>
                                <input
                                     type="radio"
                                     name="q1"
                                     value="yes"
                                     //checked= {"q1" === "yes"}
                                     onChange={this.handleChange}

                                />
                                Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="no"
                                //checked= {"q1" === "no"}
                                onChange={this.handleChange}


                            />
                            No
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="Idk"
                                //checked= {"q1" === "Idk"}
                                onChange={this.handleChange}

                            />
                            I don't know
                        </label>

                    </label>
                    <br/>
                    <label>
                        2.  What is your marital status?
                        <br/>
                            <label>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="married"
                                    //checked= {"q2" === "married"}
                                    onChange={this.handleChange}

                                />
                                Married
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="unmarried"
                                    //checked= {"q2" === "unmarried"}
                                    onChange={this.handleChange}

                                />
                                Unmarried
                            </label>
                    </label>
                    <br/>
                    <label>
                        3.  When you are in a stressful situation, how do you most frequently react?
                        <br/>
                            <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="1"
                                        //checked= {"q3" === "1"}
                                        onChange={this.handleChange}

                                    />
                                Determination: I continue to confront the situation
                            </label>
                            <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="2"
                                        //checked= {"q3" === "2"}
                                        onChange={this.handleChange}

                                    />
                                Defeat: I stop confronting the situation
                            </label>
                            <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="3"
                                        //checked= {"q3" === "3"}
                                        onChange={this.handleChange}

                                    />
                                Anger: I become upset at the situation 
                            </label>
                            <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="4"
                                        //checked= {"q3" === "4"}
                                        onChange={this.handleChange}

                                    />
                                Resourcefulness: I seek help to confront the situation
                            </label>
                    </label>
                    <br/>
                    <label>
                        4.  Are you claustrophobic?
                    </label>
                    <br/>
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="yes"
                                //checked= {"q4" === "yes"}
                                onChange={this.handleChange}

                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="no"
                                //checked= {"q4" === "no"}
                                onChange={this.handleChange}

                            />
                            No 
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="Idk"
                                    //checked= {"q4" === "Idk"}
                                    onChange={this.handleChange}
                                />
                            I don't know
                        </label>
                        <br/>
                    <label/>
                    <label>
                      5.  Does your family have a history of? (check all that apply):
                      <br/>
                        <label>
                            <input
                                type="checkbox"
                                //checked={agree}
                            />
                            Cancer
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Heart Disease
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Diabetes
                        </label>
                    </label>
                    <br/>
                    <label>
                        6.  Do you have any living (check all that apply):
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Siblings?
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Parents?
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Grandparents?
                        </label>
                    </label>
                    <br/>
                    <label>
                        7. Check all educational credentials you have recieved:
                        <br/>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                High School diploma or GED equivalent
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                Associate's Degree
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                Bachelor's Degree
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                Master's degree
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                PhD
                            </label>
                            <br/>
                            <label>
                                Other
                                <input
                                    type="text"
                                />
                            </label>
                    </label>
                    <br/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
        
    }
}
export default Form