import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  circleContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  circle: {
    width: "32px",
    height: "32px",
    padding: "4px",
    textAlign: "center",
    borderRadius: "50%",
    marginRight: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer", // Add cursor pointer
    border: "none",// Add default transparent border
    transition: "border-color 0.3s ease-in-out", // Add transition animation
  },
  active: {
    border: "2px solid ", // Add border when active
    // backgroundImage: 'linear-gradient(45deg, #F06A9B, #6C63FF)',
    // '-webkit-text-fill-color': 'transparent',
    borderColor: "", 
    boxShadow: "0 0 0 2px #fff", // Add white shadow
  },
}));