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
    marginBottom:"20px",
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
  EmptyWishList:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    gap:"4px",
    [theme.breakpoints.down("sm")]: {
      gap:"2px",
    },
    '& img':{
      width:"100%",
      height:"100%",
      objectFit:"contain",
    },
    '& a':{
      textDecoration:"none",
      color:"inherit",
      fontSize:"1rem",
      fontWeight:"900",
      border:"1px solid #000",
      padding:"8px 12px",
      textTransform:"uppercase",
      letterSpacing:"2px",
      linerGradient:"to right, #fbc2eb, #a6c1ee",
      translation:"all 0.5s ease",
      '&:hover':{
        background:"black",
        color:"white",
      },
    },

  }

  
}));