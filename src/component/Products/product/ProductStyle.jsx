import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    height: "200px", // Added "px" unit
    width: "100%", // Added "px" unit
    padding: "5px", // 16:9
    backgroundSize: "contain",
    
  },
  cardContent: {
    display: "flex",
    flexDirection: "column", // Change to "column" to stack the elements vertically
    justifyContent: "space-between",
    minHeight: "210px", // Added a minimum height to the card content
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap", // Prevent text wrapping
    textAlign: "center", // Center the text within the card content
  },
}));
