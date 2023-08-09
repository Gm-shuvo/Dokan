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
    marginTop: '20px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems:"center", 
  },
  devider:{
    content:'',
    borderBottom:'1px solid lightgray',
    marginTop:'20px',
    
  },
  emptyCart:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'10px',
    margin:'40px 0',
  },
  emptyCartImg:{
    width:'50%',
    height:'auto',
  },
  emptyCartText:{
    fontSize:'1.5rem',
    fontWeight:'900',
    textTransform:'uppercase',
    letterSpacing:'2px',
    color:'gray',
  },
  emptyCartButton:{
    border:'1px solid gray',
    padding:'10px',
    borderRadius:'5px',
    cursor:'pointer',
    transition:'all 0.3s ease-in-out',
    '&:hover':{
      backgroundColor:'gray',
      color:'white',
    }
  }
  
}));