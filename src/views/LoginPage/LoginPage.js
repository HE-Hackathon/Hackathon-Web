import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);


export default function LoginPage(props) {  

  const classes = useStyles();
  const { ...rest } = props;
  const path = props.location.pathname;
  
  const [age, setAge] = useState('Select a role');
  const handleChange = (event) => {
    setAge(event.target.value);    
  };


  const name = path === '/register' ?
   <CustomInput
      labelText="Name"
      id="name"
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        type: "text",
        autoComplete: "off",
      }}
  /> : ''


  return (
    <div>      
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>              
              <Card>
                <form className={classes.form}>
                  <p className={classes.divider}> { path === "/" ? "LOGIN" : "REGISTER" } </p>
                  <CardBody>
                    {name}
                    <CustomInput
                      labelText="Email id"
                      id="email"
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
                      formControlProps={{
                        fullWidth : true
                      }}
                      inputProps={{
                        type: "password",
                        autoComplete: "off",
                      }}
                    />
                    
                    <Select
                      value={age}
                      onChange={handleChange}    
                      displayEmpty                                        
                      style={{ marginTop : 20 }}
                      fullWidth={true}
                      className={classes.selectEmpty}
                      inputProps={{ "aria-label": "Without label" }}
                    > 
                      <MenuItem value="Select a role">Select a role </MenuItem>                     
                      <MenuItem value="developer">Developer</MenuItem>
                      <MenuItem value="recruiter">Recruiter</MenuItem>                      
                    </Select>                    
                  </CardBody>

                  <CardFooter style={{ marginTop : 20 }} className={classes.cardFooter}>
                    <Link to={path === "/register" ? "/verify" : "/createprofile"} >
                      <Button color="primary" >Get started</Button>                        
                    </Link>                    

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
