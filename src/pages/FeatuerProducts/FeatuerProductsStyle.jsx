import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root:{
    marginTop: "100px",
    display: "flex",
    flexDirection: "row",
    placeItems: "center",
    flexWrap: "nowrap",
    gap: "10px",
    padding:"0",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },


  },


}));