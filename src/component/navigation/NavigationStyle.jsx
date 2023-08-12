import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "0px",
    // display: "flex",
    placeItems: "center", // Center the content
    alignItems: "center",
    minHeight:"64px",
    borderBottom: "1px solid #ebebeb",
     // Space between title and other items
    width: "100%", // 80% width of the container
    margin: "0 auto", // Center the navbar
    [theme.breakpoints.down("sm")]: {
      width: "100%", // Full width on small screens
    },
  },
  typo:{
    textAlign:"center",
    fontWeight:"900",
    textTransform:"uppercase",
    letterSpacing:"2px",
    fontSize:"1.5rem",
    linerGradient:"to right, #fbc2eb, #a6c1ee",
  },
  wrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    margin: "0 auto",
    padding: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  auth:{
    display:"flex",
    alignItems:"center",
    gap: "2px"

  },
  title: {
    textDecoration: "none",
    color: "inherit",
  },
  button: {
    display: "flex",
    alignItems: "center",
  },

  popover: {
    
    '& .MuiListItem-root:nth-last-child(1)': {
      borderBottom: "none",
    },
    '& .MuiListItem-root:not(:nth-last-child(1))': {
      borderBottom: "1px solid #ebebeb",
    },
    '& .MuiListItemIcon-root': {
      minWidth: "20px",
      marginRight: '10px'
    },
    '& .MuiListItemText-root': {
      fontSize: "14px",
    },
  },
  
}));

export default useStyles;
