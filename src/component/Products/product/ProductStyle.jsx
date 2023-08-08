import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "200px", // Added "px" unit
    width: "100%", // Added "px" unit
    padding: "5px", // 16:9
    backgroundSize: "cover",
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
