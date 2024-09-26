import React from "react";
import { GlobalStyle } from "./Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Laboratorio from "./pages/Laboratorio";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Laboratorio />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
