import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "2rem",

   
  },
  product: {
    flexGrow: 0,
    flexBasis: "0%",
    
    
  },
  root: {
    marginTop: theme.spacing(10),
    
    
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(12),
    },


    
  },
}));