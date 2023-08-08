import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    
   
  },
  root: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(12),
    },


    
  },
}));