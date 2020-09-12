import React, { useState, Fragment, useEffect } from "react";
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage.js";
import Login_CreateProfile from "views/ProfilePage/Login_CreateProfile";
import Home_Dashboard from "views/Dashboard/Home_Dashboard";
import Verification from "components/Verification/Verification";
import RecruiterApplicants from "views/RecruiterApplicants/RecruiterApplicants";
import DeveloperFeed from "views/DeveloperFeed/DeveloperFeed";
import { useSelector, useDispatch } from 'react-redux';
import { reUserData } from './redux/actions/index'
import axios from "axios";
import Loading from "views/Components/Loading/Loading";
import RecruiterDashboard from "views/Components/RecruiterDashboard/RecruiterDashboard";
import UserProfile from "views/ViewUserProfile/UserProfile";
import ViewDevelopers from "views/ViewDevelopers/ViewDevelopers";
import HeaderLinks from "components/Header/HeaderLinks";
import Header from "components/Header/Header";


var hist = createBrowserHistory();
const baseUrl = "https://hackerearthhackathon.herokuapp.com";

const App = () => {
  
  const [loading,handleLoading] = useState(true);
  const loginState = useSelector(state=>state.login);

  const data = {
    email : localStorage.getItem('email'), 
    isRecruiter : localStorage.getItem('isRecruiter') === 'true',
  }  
  const dispatch = useDispatch();
  const login = "/relogin";    
  const options = {
    headers : {
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin" : "*"
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post( baseUrl + login , data, options)
      dispatch(reUserData(res.data));
      handleLoading(false);
    };
    if( loginState.user.data === undefined && data.email!==null ){
      console.log("Calling the function")  
      fetchData();
    }else{
      handleLoading(false);
    }
  
  }, []);
  
  const flag = localStorage.getItem('isLogin');

  return (    
    <Router history={hist}>      
        <Header
          brand="Welcome to Recruit-a-thon"
          rightLinks={<HeaderLinks flag={flag} />}
          fixed
          color="black"
        />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={LoginPage} />      
        <Route exact path="/verify" component={Verification} />
        {
          loading ? <Loading />:      
          <Switch>
            
            <Route exact path="/createprofile" component={Login_CreateProfile} />
            <Route exact path="/feed" component={DeveloperFeed} />
            <Route exact path="/dashboard" component={Home_Dashboard} />            
            
            <Route exact path="/viewdevelopers" component={ViewDevelopers} />          
            <Route exact path="/rdashboard" component={RecruiterDashboard} />          
            <Route exact path="/ViewApplicants" component={RecruiterApplicants}/>
            <Route exact path="/UserProfile" component={UserProfile}/>            

          </Switch>
        }
      </Switch> 

    </Router>
  );
};

export default App;
