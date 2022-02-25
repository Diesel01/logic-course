import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About.js";
import Item from "./components/Item.js";
import Linha from "./components/Linha.js";
import Intro from "./components/Intro.js";
import Silogismo from "./components/Silogismo.js";

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path = "/" exact component = {About} />
          <Route path = "/linha" exact component = {Linha} />
          <Route path = "/intro" exact component = {Intro} />
          <Route path = "/silogismo" exact component = {Silogismo} />
          <Route path = "/item/:name" exact component = {Item} />
        </Switch>

      </Router>
    </>
  );
}

export default App;