import React from "react";
import "./App.css";
import Form from "./Components/Forms";
import { Route, Switch } from "react-router-dom";
import RadioInput from '../src/Components/RadioInput/RadioInput';
import RadioInputTwo from './Components/RadioInput/RadioInputTwo';
import RadioInputThree from './Components/RadioInput/RadioInputThree';
import RadioInputFour from './Components/RadioInput/RadioInputFour'

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path={'/'}>
          <Form />
        </Route>

        <Route path={'/next'}>
          <RadioInputTwo />
        </Route>
        <Route path={'/four'}>
          <RadioInputFour />
        </Route>

        <Route path={'/nextPage'}>
          <RadioInputThree />
        </Route>

        <Route path={'/cont'}>
          <RadioInput />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
