/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>      
    <ListItem className={classes.listItem}>      
        <Link to="/feed">
          <Button
            color="transparent"            
            target="_blank"
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
            target="_blank"
            className={classes.navLink}
          >
            DASHBOARD
          </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/">
          <Button
            color="transparent"            
            target="_blank"
            className={classes.navLink}
          >
            LOGOUT
          </Button>
          </Link>
      </ListItem>
    </List>
  );
}
