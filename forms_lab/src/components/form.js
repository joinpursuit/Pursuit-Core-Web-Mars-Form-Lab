import React from 'react';
import coo from "./coo"

class Form extends React.Component{
    state ={
        firstName:"",
        lastName:"",
        DOB:"",
        coo:"",
        diet:"omnivore",
        reason:"",
        breathe: "Yes",
        status: "unmarried",
        react: "Determination",
        claustrophobic: "No",
        health: false,
    }
    handleChange=(e)=>{
        let results=document.querySelector("#results")
        results.innerHTML=""
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }

    handleCompletedForm=(e)=>{
        document.body.innerHTML=""
        // this.createSecondFOrm()
        let p = document.createElement("p")
        p.innerText="Thank you for your application"
        document.body.appendChild(p)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let results=document.querySelector("#results")
        let form=document.querySelector("#reg")
        let h4 = document.createElement("h4")
        h4.innerText="form completed"
        results.appendChild(h4)
        
        for(let key in this.state){
            let p = document.createElement("p")
            p.innerText= `${key}: ${this.state[key]}`
            results.appendChild(p)
        }
        form.reset()
        let confirmButton = document.createElement("button")
        confirmButton.innerText = "all correct"
        results.appendChild(confirmButton)
        confirmButton.onclick = this.handleCompletedForm
    }
    
    componentDidMount(){
        
        
        let form=document.querySelector("#reg")
        coo.forEach(country=>{
            let option = document.createElement("option")
            option.innerText = `${country.name}`
            option.value = `${country.name}`
            form.coo.appendChild(option)
        })
    }
    

    render(){
        let { diet, breathe, status, react, claustrophobic, health } = this.state
        return(
            <form id="reg" onSubmit={this.handleSubmit}>

                <label >
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastName"  value={this.state.lastName} onChange={this.handleChange}/>
                </label>

                <label>
                    Date of Birth
                    <input type="date" name="DOB" value={this.state.DOB} onChange={this.handleChange} min="1900-01-01"/>
                </label>

                <label>
                    Country of Origin
                    <select name="coo" value={this.state.coo} onChange={this.handleChange}>
                        <option disabled value=""> Select country</option>
                    </select>
                </label>

                <label>
                    Dietary Preference:
                    <label>
                    omnivore
                        <input type="radio" name="diet" value="omnivore" checked={diet === "omnivore"} onChange={this.handleChange}/>
                    </label>
                    <label>
                    vegetarian
                        <input type="radio" name="diet" value="vegetarian" checked={diet === "vegetarian"} onChange={this.handleChange} />    
                    </label>
                    <label>          
                    vegan    
                        <input type="radio" name="diet" value="vegan" checked={diet === "vegan"} onChange={this.handleChange}/>
                    </label>
                </label>

                <label>
                    Why do you want to be a Mars explorer
                    <input type="text" name="reason" onChange={this.handleChange} size="100"/>
                </label>

                <label>
                    <input type="submit" value="submit"/>
                </label>

                <label> 

                Can you breathe underwater longer than 1 minute?
                </label>

                <label>
                    Yes
                    <input type="radio" name="breathe" value="Yes" checked={breathe === "Yes"} onChange={this.handleChange}/>
                </label>
                <label>
                    No
                    <input type="radio" name="breathe" value="No" checked={breathe === "No"} onChange={this.handleChange}/>
                </label>
                <label>
                    I Don't Know
                    <input type="radio" name="breathe" value="I Don't Know" checked={breathe === "I Don't Know"} onChange={this.handleChange}/>
                </label>
            <label>
                What is your marital status? 
                Married
                <input type="radio" name="status" value="Married" checked={status === "Married"} onChange={this.handleChange}/>
                Unmarried
                <input type="radio" name="status" value="Unmarried" checked={status === "Unmarried"} onChange={this.handleChange}/>
            </label>
        <label>
            When you are in a stressful or difficult situation, how do you most frequently react?

            Determination: I continue to confront the situation.
            <input type="radio" name="react" value="Determination" checked={react === "Determination"} onChange={this.handleChange}/>
            
            Defeat: I stop confronting the situation.
            <input type="radio" name="react" value="Defeat" checked={react === "Defeat"} onChange={this.handleChange}/>
            
            Anger: I become upset at the situation.
            <input type="radio" name="react" value="Anger" checked={react === "Anger"} onChange={this.handleChange}/>
            
            Resourcefulness: I seek help to confront the situation.
            <input type="radio" name="react" value="Resourcefulness" checked={react === "Resourcefulness"} onChange={this.handleChange}/>
        </label> 
        <label>
            Are you claustrophobic?

            Yes:
            <input type="radio" name="claustrophobic" value="Yes" checked={claustrophobic === "Yes"} onChange={this.handleChange}/>

            No:
            <input type="radio" name="claustrophobic" value="No" checked={claustrophobic === "No"} onChange={this.handleChange}/>

            I Don't Know:
            <input type="radio" name="claustrophobic" value="I don't know" checked={claustrophobic === "I don't know"} onChange={this.handleChange}/>
         </label>
         <label>
            Does your family have a history of (check all that apply):

           Cancer <input type="checkbox" name="health" value="Cancer" checked={health === true} onChange={this.handleChange}/>
         </label>
            </form>
        )
    }

}

export default Form;