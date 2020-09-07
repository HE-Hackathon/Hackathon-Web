import { container } from "assets/jss/material-kit-react.js";

const homeDashboardPageStyle = {
  container: {
    // ...container,
    zIndex: "2",
    position: "absolute",
    paddingTop: "15vh",
    color: "#000",    
    flexGrow: 1,    
  },  
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "#eee"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  root: {
    minWidth: 275,
  },
  profilePic : {
    display: 'flex', 
    justifyContent :'center', 
    alignItems: 'center',     
    backgroundColor : '#fff'
  },


  form: {
    margin: "0",        
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "10px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
    fontSize : "20px"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",    
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};

export default homeDashboardPageStyle;
