import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  media: {
    height: 100,
    width: 100,
    backgroundSize:'contain',
    '& img':{
      width:'100%',
      height:'100%',
      objectFit:'contain',
      borderRadius:'4px',
    }
  },
  root: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    maxHeight:'100px',
    boxShadow:'none',
    border:'1px solid lightgray',
    cursor:'pointer',
    
    borderRadius:'10px',
    //hover 
    '&:hover':{
      boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.2)',
      
    }

  },
  cardContent: {
    display: 'flex',
    alignItems:'center',
    gap: '20px',
    height:'100px',
    padding:'4px',
    
  },
  title:{
    display:'grid',
    gap:'4px',  
    alignItems:'start',
    justifyContent:'start',           
  },
  cartActions: {
    justifyContent: 'space-between',
    alignItems:'center',
    display:'flex',
    padding:'2px',
  },
  button: {
    fontSize: "1rem",
    border: "1px solid",
    borderRadius: "10px",
    padding: " 0.5rem .8rem",
  },
  minusButton:{
    border:'1px solid'
    
  },
  plusButton:{
    border:'1px solid'
  },
  
}));