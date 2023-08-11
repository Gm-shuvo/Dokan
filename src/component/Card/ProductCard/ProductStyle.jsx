import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2 )",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },

    // [theme.breakpoints.down("sm")]: {

  },
  media: {
    height: "160px", 
    width: "100%", 
    padding: "5px", 
    borderRadius: "10px",
    backgroundSize: "contain",
    objectFit: "cover",
    cursor: "pointer",
    '& img':{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '10px',
    },
    [theme.breakpoints.down("md")]: {
      height: "140px",
    },

    
  },
  cardContent: {
    display: "flex",
    flexDirection: "column", // Change to "column" to stack the elements vertically
    justifyContent: "space-between",
  },
  contentHead:{
    '& > h5': {
      minHeight: "40px",
      maxHeight: "40px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
    },
  },

  contentBody: {
    maxHeight: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
  },
  
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3px",
    padding: "0px"   
  },

  title: {
    paddingLeft: "16px"
  },

  name: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap", // Prevent text wrapping
    textAlign: "center", // Center the text within the card content
  },
}));
