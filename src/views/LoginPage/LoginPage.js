import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../../redux/actions/'

const useStyles = makeStyles(styles);
const baseUrl = "https://hackerearthhackathon.herokuapp.com";

export default function LoginPage(props) {

  // const loginState = useSelector(state => state.login )
  // console.log(loginState);
  const dispatch = useDispatch();

  const classes = useStyles();  
  const path = props.location.pathname;

  const [state, setState] = useState({ name : "" ,email : "", pass : "", role : "Select a role"});
  
  
  // Functions

  //Handle Input
  const handleChange = (e) => {    
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  //Handle Submit
  const handleSubmit = () => { 

    const options = {
      headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin" : "*"
      }
    };
    
    let data = {
      email : state.email,
      pass : state.pass,
      isRecruiter : state.role === "developer" ? false : true
    };    

    if( path === '/register' ){

      const register = "/regist_succ"; 

      data['name'] = state.name;            
      axios.post( baseUrl + register , data, options )
        .then((res)=>{
          console.log(res.data);
          const data = res.data;
          if(data.success===true){
            props.history.push('/verify');
          }else{
            alert("User already registered");
          }
        })

      
    }else{      

      const login = "/login_succ";    
      axios.post( baseUrl + login , data, options)
        .then((res)=>{
          console.log(res.data);
          const data = res.data;
          if(data.value===200){
            if(data.data.isVerified === false ){
              alert('Please Verify Your Account');
            }else{          
              if(data.data.isCreatedProfile === true){
                dispatch(userData(res.data));
                props.history.push('/dashboard');
              }else {
                props.history.push('/createprofile');
              }
              
              
            }            
          }else if(data.value===400){
            alert("Username/Password do not match");
          }else if(data.value===500){
            alert("Please Register First");
          }          
        })

    }
  }
  
  const name =
    path === "/register" ? (
      <CustomInput
        labelText="Name"
        id="name"
        name = "name"
        val = {state.name}
        handleChange = {handleChange}
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          type: "text",
          autoComplete: "off",
        }}
      />
    ) : (
      ""
    );

  return (
    <div>
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <p className={classes.divider}>                    
                    {path === "/" ? "LOGIN" : "REGISTER"}
                  </p>
                  <CardBody>
                    {name}
                    <CustomInput
                      labelText="Email id"
                      id="email"
                      name = "email"
                      val = {state.email}
                      handleChange = {handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      name = "pass"
                      val = {state.pass}
                      handleChange = {handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        autoComplete: "off",
                      }}
                    />

                    <Select
                      value={state.role}
                      name = "role"
                      onChange={handleChange}
                      displayEmpty
                      style={{ marginTop: 20 }}
                      fullWidth={true}
                      className={classes.selectEmpty}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="Select a role">Select a role </MenuItem>
                      <MenuItem value="developer">Developer</MenuItem>
                      <MenuItem value="recruiter">Recruiter</MenuItem>
                    </Select>
                  </CardBody>

                  <CardFooter
                    style={{ marginTop: 20 }}
                    className={classes.cardFooter}
                  >
                    {/* <Link to={path === "/register" ? "/verify" : "/createprofile"}> */}
                      <Button onClick={handleSubmit} color="primary">Get started</Button>
                    
                  </CardFooter>

                  <CardFooter className={classes.cardFooter}>
                    <Link
                      to={path === "/register" ? "/" : "/register"}
                      style={{ color: "blue" }}
                    >
                      {path !== "/register"
                        ? "Click here to register"
                        : "Click here to Login"}
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
