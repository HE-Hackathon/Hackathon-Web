/*eslint-disable*/
import React, { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useSelector,useDispatch } from "react-redux";
import { logout } from '../../redux/actions/index'

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {

  const classes = useStyles();  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
    localStorage.removeItem('isLogin');
  }
  // console.log(props);
  const loginState = useSelector(state=>state.login);
  const { isCreatedProfile } = loginState.user.data || false;  
  const isRecruiter = loginState.user.isRecruiter;
  
  return (
    <List className={classes.list}>            
      {       
        isRecruiter ? 
        <Fragment>
           <ListItem className={classes.listItem}>                
            <Button
                color="transparent"                        
                className={classes.navLink}
                href = '/rdashboard'
              >
                MY DASHBOARD
              </Button>            
          </ListItem>
            <ListItem className={classes.listItem}>                
                <Button
                  color="transparent"                        
                  className={classes.navLink}
                  href = '/viewdevelopers'
                >
                  VIEW DEVELOPERS
                </Button>            
            </ListItem>           
      </Fragment>
        : 
  
        isCreatedProfile ?  
        <Fragment>
          <ListItem className={classes.listItem}>      
            <Link to="/feed">
              <Button
                color="transparent"                        
                className={classes.navLink}            
              >
                MY FEED
              </Button>
            </Link>
        </ListItem>
          <ListItem className={classes.listItem}>      
          <Link to="/dashboard">
            <Button
              color="transparent"                        
              className={classes.navLink}
            >
              DASHBOARD
            </Button>
            </Link>
        </ListItem> 
      </Fragment>
      : "" }
  {
    props.flag === "1" ?
        <ListItem className={classes.listItem}>
          <Link to="/">
            <Button
              color="transparent"                    
              className={classes.navLink}
              onClick= {handleClick}
            >
              LOGOUT
            </Button>
            </Link>
        </ListItem> : ""
  }
    </List>
  );
}

export default  withRouter(HeaderLinks);