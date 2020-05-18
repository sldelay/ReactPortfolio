import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavComp from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import projects from "./projects.json";

function App() {
  return (
    <>
    <NavComp />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Switch>
        <Route exact path="/portfolio">
          <Portfolio projects={projects}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
