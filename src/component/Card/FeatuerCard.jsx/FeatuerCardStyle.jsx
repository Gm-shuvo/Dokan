import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  featureCardWrapper:{
    padding: "8px 10px",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    '&:hover':{
      transform: "translateY(-10px)",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "rgba(255,255,255,0.7)",
      borderRadius: "10px",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
    },
  },
  featureCardTitle:{
    textAlign: "center",
    fontSize: "20px",
    
    marginBottom: "10px",
  },
  featureCardDescription:{
    textAlign: "center",
    fontSize: "16px",
    

  }

}));