import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root:{
    width: "80%",
    margin: "120px auto",
    display:"flex",
    
    flexDirection:"column",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },

  },
  content:{
    display: "grid",
    gridTemplateColumns: ".2fr .8fr ",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    

  }
}));