import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: "300px",
    backgroundColor: "azure",
    padding: "20px",
    borderRadius: "10px",
  },
  title:{
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  list:{
    listStyle: "none",
    padding: "0",
    marginTop: "20px",
    gap: "20px",
  },
  item:{
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "6px",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
  active:{
    color: "white",
    backgroundColor: "black",
  }
}));