import React from "react";
import "./App.css";
import Form from "./Components/Forms";
import { Route, Switch } from "react-router-dom";
import ConfirmPage from './Components/ComfirmPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'}>
          <Form />
        </Route>
        <Route path={'/confirm'}>
          <ConfirmPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
