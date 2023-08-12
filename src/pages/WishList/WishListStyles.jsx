import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root:{
    width: "80%",
    margin: "120px auto",
    display:"flex",
    
    flexDirection:"column",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },

  },
  Heading:{
    textAlign:"center",
    fontWeight:"900",
    textTransform:"uppercase",
    letterSpacing:"2px",
    fontSize:"1.5rem",
    linerGradient:"to right, #fbc2eb, #a6c1ee",
  },
  Wish:{
    display:"flex",
    flexDirection:"column",
    marginTop:"20px",
    gap:"20px",
    [theme.breakpoints.down("sm")]: {
      
      gap:"10px",
    },
  },
  

  
}));