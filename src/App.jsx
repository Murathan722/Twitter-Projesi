import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TwitterGiris from "./components/TwitterGiris";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TwitterGiris} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
