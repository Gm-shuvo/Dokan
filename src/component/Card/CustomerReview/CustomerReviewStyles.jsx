import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root:{
    marginTop: "20px",
    width: "80%",
    maxHeight: "200px",
    display: "flex",
    alignItems: "center",
    gap: "26px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    transition: "all 0.3s ease-in-out",
    '&:hover':{
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },        
    [theme.breakpoints.down("sm")]:{
      gap: "16",
      width: "90%",
    },
  },
  imageContainer:{
    width: "15%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img":{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  reviewContainer:{
    width: "90%",
    height: "100%",
    display: "flex",
    gap: "2px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name:{
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
    [theme.breakpoints.down("sm")]:{
      fontSize: "16px",
    },

  },
  email:{
    fontSize: "14px",
    fontWeight: "bold",
    color: "lightgray",
    [theme.breakpoints.down("sm")]:{
      fontSize: "12px",
    },
  },
  review:{
    marginTop: "10px",
    fontSize: '1rem',
    color: "#555",
    lineHeight: '1.5',
    letterSpacing: '1px',
    [theme.breakpoints.down("sm")]:{
      fontSize: "14px",
      lineHeight: "1.3",
      letterSpacing: "0.5px",
    },
  },

}));