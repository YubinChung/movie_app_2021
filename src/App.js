import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./componants/Navigation";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/movie/:id" component={Details} />
  </HashRouter>)
}

export default App;
