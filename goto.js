import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Login from "./login";

function goto() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/About" component={About} />
        <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default goto;
