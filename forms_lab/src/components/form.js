import React from 'react';
import coo from "./coo"

class Form extends React.Component{
    state ={
        firstName:"",
        lastName:"",
        DOB:"",
        coo:"",
        diet:"omnivore",
        reason:""
    }
    handleChange=(e)=>{
        let results=document.querySelector("#results")
        results.innerHTML=""
        console.log(this.state)
        this.setState({
            [e.target.name]:e.target.value
        })
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
        let {diet} = this.state
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
            </form>
        )
    }

}

export default Form;