import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import Login_CreateProfile from "views/ProfilePage/Login_CreateProfile";
import Home_Dashboard from "views/Dashboard/Home_Dashboard";
import Verification from "components/Verification/Verification";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>            
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={LoginPage} />
      <Route exact path="/verify" component={Verification} />
      <Route exact path="/createprofile" component={Login_CreateProfile}/>
      <Route exact path="/dashboard" component={Home_Dashboard}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
