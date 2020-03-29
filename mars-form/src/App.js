import React from "react";
import "./App.css";
import Form from "./Components/Forms";
import { Route, Switch } from "react-router-dom";
import RadioInput from '../src/Components/RadioInput/RadioInput'

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path={'/'}>
          <Form />
        </Route>

        {/* <Route path={'/confirm'}>
          <ConfirmPage />
        </Route> */}

        <Route path={'/cont'}>
          <RadioInput />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
