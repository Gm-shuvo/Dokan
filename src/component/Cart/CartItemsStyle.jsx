import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    margin: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  root:{
    marginTop:'120px'
  },
  container:{
    display:'grid',
    width:'100%',
    alignItems:'center',
    gap:'10px',
    marginTop:'20px',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  devider:{
    content:'',
    borderBottom:'1px solid lightgray',
    marginTop:'20px',
    
  }
}));