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
  
}));