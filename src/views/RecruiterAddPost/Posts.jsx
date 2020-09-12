import React, { Fragment, useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = (props) => {
  const data = props.data;
  console.log(data);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.pageHeader}>
        <div
          style={{ flexGrow: "1", width: "100%" , border:"2px solid",height:"auto"}}
          className={classes.container}
        >
        {
            data.map(post => 
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        {post.position}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {post.skills}
                        </Typography>
                        <Typography variant="h3" component="h2">
                        {post.workex}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {post.description}
                        </Typography>
                    </CardContent>
                    {
                        post.position ?
                        <CardActions style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Button color="Primary" size="small">Delete</Button>
                        </CardActions> :<div></div> 
                    }
                </Card>
            </div>
            
            )
        }
        
        </div>
      </div>
    </div>
  );
};


export default Posts;
