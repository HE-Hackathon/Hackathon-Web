import React from "react";
import { createBrowserHistory } from "history";

import { Router, Route, Switch } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage.js";
import Login_CreateProfile from "views/ProfilePage/Login_CreateProfile";
import Home_Dashboard from "views/Dashboard/Home_Dashboard";
import Verification from "components/Verification/Verification";
import RecruiterApplicants from "views/RecruiterApplicants/RecruiterApplicants";

var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={LoginPage} />
        <Route exact path="/verify" component={Verification} />
        <Route exact path="/createprofile" component={Login_CreateProfile} />
        <Route exact path="/dashboard" component={Home_Dashboard} />
        <Route exact path="/post_applicants" component={RecruiterApplicants} />
      </Switch>
    </Router>
  );
};

export default App;
