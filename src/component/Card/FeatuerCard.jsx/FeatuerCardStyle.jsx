import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  featureCardWrapper:{
    padding: "8px 10px",
    minWidth: "200px",
    '&:hover':{
      transform: "translateY(-10px)",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "rgba(255,255,255,0.3)",
      borderRadius: "10px",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
    },
  }

}));