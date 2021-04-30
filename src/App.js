import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About.js";
import Item from "./components/Item.js";
import Linha from "./components/Linha.js";
import Intro from "./components/Intro.js";

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>

        <Switch>
          <Route path = "/" exact component = {About} />
          <Route path = "/linha" exact component = {Linha} />
          <Route path = "/intro" exact component = {Intro} />
          <Route path = "/item/:name" component = {Item} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;