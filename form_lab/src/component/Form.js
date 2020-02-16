import React from "react"

class Form extends React.Component {


  render(){
          return(
          
           <div>
            <h1>Mission to Mars Registration Form.</h1>
            
        <form>
        <label>What is your name?
        <input type = "text"/>
        </label>
        <br/>

       <label>What is your date of birth?
       <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1990-01-01" max="2020-12-31"/>
       </label>
       <br/>
       
       <label>
       What is your dietary preference?
         <select >
            <option disabled>Please Pick one</option>
            <option>omnivore</option>
            <option>vegetarian</option>
            <option>vegan</option>
         </select>
       </label>
      <br/>
      <label>
      Why do you want to be a Mars explorer?
        <input type = "text"/>
      </label>

       </form>
      </div>


          )
}
}


export default Form;