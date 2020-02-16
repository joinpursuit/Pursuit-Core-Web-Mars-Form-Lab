import React, {Component} from 'react';
// import axios from 'axios';
import countries from "./countries"

class Form extends Component{
    state = {
        name: "",
        birthday: "",
        countries: countries,
        selectedCountry: "United States",
        diet: "",
        explorer: "",
        formCompleted: false,
        formSubmitted: false,
        breathe:"no",
        married:false,
        situation:"",
        claustrophobic:false,
        familyHistory:"",
        living:{}
    }

    // populateCountry() {
    //     // e.preventDefault();
    //     axios.get("http://vocab.nic.in/rest.php/country/json").then(res => {
    //         let {countries} = res.data;
    //         // debugger
    //         // this.setState({countries});
    //     })
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formCompleted: !this.state.formCompleted
        })
        if(this.state.formCompleted === true) {
            let div = document.querySelector("#formSubmitted");
            div.hidden = false;
        }
    }

    handleSubmitComplete = (e) => {
        e.preventDefault();
        let clearPage = document.querySelector("#inputPage");
        let p = document.querySelector("#applicationClose");
        clearPage.innerHTML = "";
        p.hidden = false;
    }
    

    handleCheckBox = (e,state)=>{
        // debugger
        if(e.target.checked){
            let question = document.createElement("input")
            question.type="Number"
            question.placeholder="How Many...?"
            e.target.parentNode.appendChild(question)
            let submit = document.createElement("button")
            submit.innerText="submit"
            let inputKey = e.target.value
            // console.log(e.target.value)
            submit.onclick=function submitHowMany (name,value,obj){
                name=inputKey
                value =question.value
                obj=state
                obj[name]=value
                console.log(obj)     
            }
            
            e.target.parentNode.appendChild(submit)
            let br = document.createElement("br")
            e.target.parentNode.appendChild(br)
        }
    }

    
    render(){
        // console.log(this.state);
        let { name, birthday, selectedCountry, diet, explorer,breathe,married,situation,claustrophobic,familyHistory,living } = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Mission to Mars Registration Form
                    </h1>
                    <div id="inputPage">
                        <label>
                            Name:
                            <input type="text" placeholder="What's your name?" name="name" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <label>
                            Date of Birth:
                            <input type="date" name="birthday" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <label>
                            Country of Origin:
                            {/* <select id="countryList" onClick={this.populateCountry}> */}
                            <select id="countryList" name="selectedCountry" onChange={this.handleChange}>
                                <option disabled>Select Country</option>
                                { this.state.countries.map(country => 
                                <option key={country.code}>{country.name}</option>
                                ) 
                                }
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Dietary Preference:
                            <select name="diet" onChange={this.handleChange}>
                                <option disabled>Select Dietary Preference</option>
                                <option>Omnivore</option>
                                <option>Vegetarian</option>
                                <option>Vegan</option>
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Why do you want to be a Mars explorer?
                            <input type="text" name="explorer" onChange={this.handleChange}></input>
                        </label>
                        <br></br>
                        <label>
                            Can you breathe underwater longer than 1 minute?
                            <br></br>
                        </label>
                        <label>
                                Yes
                            <input type="radio" value="yes" name="breathe"></input>
                            <br></br>
                        </label>
                        <label>
                                No
                            <input type="radio" value="no" name="breathe"></input>
                            <br></br>
                        </label>
                        <label>
                                I Dont Know
                            <input type="radio" value="I dont know" name="breathe"></input>
                            <br></br>
                        </label>
                        <label>
                            What is your marital status?
                            <br></br>
                        </label>
                        <label>
                            Married
                            <input type="radio" value="true" name="married"></input>
                            <br></br>
                        </label>
                        <label>
                            Unmarried
                            <input type="radio" value="false" name="married"></input>
                            <br></br>
                        </label>
                        <label>
                            When you are in a stressful or difficult situation, how do you most frequently react?
                            <br></br>
                        </label>
                        <label>
                            Determination: I continue to confront the situation
                            <input type="radio" value="Determination" name="situation"></input>
                            <br></br>
                        </label>
                        <label>
                            Defeat: I stop confronting the situation.
                            <input type="radio" value="Defeat" name="situation"></input>
                            <br></br>
                        </label>
                        <label>
                            Anger: I become upset at the situation.
                            <input type="radio" value="Anger" name="situation"></input>
                            <br></br>
                        </label>
                        <label>
                        Resourcefulness: I seek help to confront the situation.
                            <input type="radio" value="Resourcefulness" name="situation"></input>
                            <br></br>
                        </label>
                        <label>
                            Are you claustrophobic?
                            <br></br>
                        </label>
                        <label>
                                Yes
                            <input type="radio" value="yes" name="claustrophobic"></input>
                            <br></br>
                        </label>
                        <label>
                                No
                            <input type="radio" value="no" name="claustrophobic"></input>
                            <br></br>
                        </label>
                        <label>
                                I Dont Know
                            <input type="radio" value="I dont know" name="claustrophobic"></input>
                            <br></br>
                        </label>

                        <label>
                        Does your family have a history of (check all that apply):
                            <br></br>
                        </label>
                        <label>
                            Cancer
                            <input type="checkbox" value="Cancer" name="familyHistory"></input>
                            <br></br>
                        </label>
                        <label>
                            Heart Disease
                            <input type="checkbox" value="Heart Disease" name="familyHistory"></input>
                            <br></br>
                        </label>
                        <label>
                                Diabetes
                            <input type="checkbox" value="Diabetes" name="familyHistory"></input>
                            <br></br>
                        </label> 
                        <label>
                        Do you have any living (check all that apply)::
                            <br></br>
                        </label>
                        <label id="siblings">
                            Siblings
                            <input type="checkbox" value="siblings" name="living" onChange={(e)=>this.handleCheckBox(e,living)}></input>
                            <br></br>
                        </label>
                        <label id="parents">
                            Parents
                            <input type="checkbox" value="Parents"  name="living" onChange={(e)=>this.handleCheckBox(e,living)}></input>
                            <br></br>
                        </label>
                        <label id="grandparents">
                            Grandparents
                            <input type="checkbox" value="Grandparents"  name="living" onChange={(e)=>this.handleCheckBox(e,living)}></input>
                            <br></br>
                        </label> 


                        <br></br>

                        <button type="submit">Submit</button>

                        <div hidden id="formSubmitted">
                            <p>Name: {name}, Birthday: {birthday}, Country of Origin: {selectedCountry}, Dietary Preference: {diet}, Why do you want to be a Mars explorer?: {explorer} </p>
                            <p>Please confirm this information is correct.</p>
                            <button type="button" onClick={this.handleSubmitComplete}>Confirm</button>
                        </div>
                    </div>

                    <p hidden id="applicationClose">Thank you for your application!</p>
                </form>
            </div>
        )
    }

    
    
          
        
    

    

}

export default Form;
