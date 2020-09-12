import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import GridItem from "components/Grid/GridItem.js";
import RecruiterDashboardCard from "./RecruiterDashboardCard";
import { Grid, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Create_Posts from "views/RecruiterAddPost/Create_Posts";
const useStyles = makeStyles(styles);

const baseUrl = "https://hackerearthhackathon.herokuapp.com";
const feedUrl = "/my_posts";

const RecruiterDashboard = (props) => {
  
  const { ...rest } = props;
  const classes = useStyles();
  const loginState = useSelector(state=>state.login);
  const [dataFeed, setFeedData] = useState([]);
  const [loading,setLoading] = useState(false);

  const userId = loginState.user.data._id;    
  const data = {
    id: userId
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  
  useEffect( () => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.post(baseUrl + feedUrl, data, options);    
      setFeedData(res.data.data);    
      setLoading(false);
    };  
    fetchData();
  }, []);


  const styleGrid = {
    margin: 15,
    padding: 10,
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center',
  };

  const handleViewClick = ( id ) => {
    props.history.push('/ViewApplicants', { id : id  })
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleAddPost = (value) =>{
      
    
    let data = value;    
    data.company_name = loginState.user.data.company_name;
    data.user_id = loginState.user.data._id;

    console.log(data);

    axios.post( baseUrl + "/post_job", data, options )
      .then(res =>{        
        setFeedData(prevState=>[res.data,...prevState]);
        setOpen(false);
      })
    
    
  }

  return (
    <div>
      
      <Grid container xs={12} lg={12} sm={12} direction="row">
        
        {loading? <Loading/> :
        
        <GridItem style={styleGrid} container item lg={12} sm={12} xs={12}>
            
            <GridItem style={styleGrid} container item lg={12} sm={12} xs={12} >
              <Grid container style={{ marginTop: 30, paddingTop : 30, fontSize : 20, fontWeight : 'bolder' }} xs={9} lg={9} sm={9} direction="row">
                  <Create_Posts 
                    open = {open}
                    handleOpen = {handleOpen}
                    handleClose={handleClose}
                    handleAddPost={(e,value)=>handleAddPost(e,value)} 
                    />
              </Grid>      
            </GridItem>  

            
          <Grid container xs={12} lg={12} sm={12} direction="row">
            {dataFeed.map((value) => (            
              <GridItem
                style={{
                  
                  padding: 10,
                  display : 'flex',
                  justifyContent: 'center',
                  alignItems : 'center',
                }}
                container
                item
                lg={12}
                sm={12}
                xs={12}
                alignItems="center"
                justifyContent="center"
              >
                <RecruiterDashboardCard
                  key={value._id}
                  classes={classes}
                  data={value}
                  handleClick={(e,id)=>handleViewClick(e,id)}                  
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>}
      </Grid>
    </div>
  );
};

export default RecruiterDashboard;
