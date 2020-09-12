import React, { useState, Fragment } from "react";

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
import { useDispatch } from 'react-redux';
import { userData } from '../../redux/actions/'

const useStyles = makeStyles(styles);
const baseUrl = "https://hackerearthhackathon.herokuapp.com";

export default function LoginPage(props) {

  
  const dispatch = useDispatch();

  const classes = useStyles();  
  const path = props.location.pathname;
  const [loading,setLoading] = useState(false);

  const [state, setState] = useState({ 
        name : "" ,
        email : "", 
        pass : "", 
        role : "", 
        gender : "",
        company_name:"",
        associated_since_in_years: ""
    });
  
  
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
    
    setLoading(true);

    const options = {
      headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin" : "*"
      }
    };
    
    let data = {
      email : state.email,
      pass : state.pass,
      isRecruiter : state.role === "developer" ? false : true,      
      gender : state.gender,
    };    

    if( path === '/register' ){

      const register = "/regist_succ";     
        
      if(data.isRecruiter){
        data.company_name = state.company_name;
        data.associated_since_in_years = state.associated_since_in_years;
      }

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
          setLoading(false);
        })

    }else{      
      
      const login = "/login_succ";    
      axios.post( baseUrl + login , data, options)
        .then((res)=>{
          console.log(res.data);
          const datares = res.data;
          dispatch(userData(res.data));     

          if(datares.value===200){
            if(datares.data.isVerified === false ){
              alert('Please Verify Your Account');
            }else{                
              if(datares.isRecruiter){                             
                props.history.push('/rdashboard');
              }else{
                if(datares.data.isCreatedProfile === true){                                                   
                  props.history.push('/feed');
                }else {                                                                  
                  props.history.push('/createprofile');
                } 
              }                                   
            }            
          }else if(datares.value===400){
            alert("Username/Password do not match");
          }else if(datares.value===500){
            alert("Please Register First");
          }  
          setLoading(false);
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

    const gender = 
      path === '/register' ? (
      <Select
          value={state.gender}
          name = "gender"
          onChange={handleChange}
          displayEmpty
          style={{ marginTop: 10 }}
          fullWidth={true}
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}                    
        >
          <MenuItem value="" disabled>Gender </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      ) : ( " " )

    const recruiter = 
        path === '/register' && state.role ==='recruiter' ? (
          <Fragment>
            <CustomInput
                labelText="Company Name"
                id="company_name"
                name = "company_name"
                val = {state.company_name}
                handleChange = {handleChange}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "name",
                  autoComplete: "off",
                }}
            />
            <CustomInput
                labelText="Experience ( in years ) "
                id="associated_since_in_years"
                name = "associated_since_in_years"
                val = {state.associated_since_in_years}              
                handleChange = {handleChange}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "number",                  
                  autoComplete: "off",                
                }}
            />
          </Fragment>
        ) : ( " " )

  return (
    <div>
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <p className={classes.divider}>{path === "/" ? "LOGIN" : "REGISTER"}</p>
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
                    
                    {gender}

                    <Select
                      value={state.role}
                      name = "role"
                      onChange={handleChange}
                      displayEmpty
                      style={{ marginTop: 30 }}
                      fullWidth={true}
                      className={classes.selectEmpty}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" disabled>Select a role </MenuItem>
                      <MenuItem value="developer">Developer</MenuItem>
                      <MenuItem value="recruiter">Recruiter</MenuItem>
                    </Select>

                    {recruiter}

                  </CardBody>
                  
                  <CardFooter
                    style={{ marginTop: 20 }}
                    className={classes.cardFooter}
                  >                    
                      <Button onClick={handleSubmit} color="primary">
                        { !loading ? "Get started" : path === '/register' ? "Registering..." : "Logging in..." }
                      </Button>
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
