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
    WebkitBackgroundClip: "text",
  },
  wrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    margin: "0 auto",
    paddingTop: "6px",
    
    fontFamily: "inherit",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  logo:{
    
    '& img':{
      width: "70%",
      height: "100%",
      objectFit: "contain",
    },
    [theme.breakpoints.down("sm")]: {
      '& img':{
        width: "60%",
      },
    },
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  navLink: {
    
  },

  navButons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  loginButton: {
    padding: "5px 10px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 5px",
      fontSize: "12px",
    },
  },
  
  avatarButton: {
    height: "50px",
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "900",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "40px",
    },
    
  },
  popover: {
    '& .MuiPopover-paper':{
      width: "200px",
      borderRadius: "10px",
      marginTop: "10px",
    },
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
