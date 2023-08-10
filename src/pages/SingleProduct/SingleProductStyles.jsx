import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
  root:{
    marginTop: "112px",
    width: '80%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '0.4fr 0.6fr',
    gap: theme.spacing(8),
    [theme.breakpoints.down('md')]:{
      gridTemplateColumns: '1fr',
      gap: theme.spacing(4),
    }
  },
  imageContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '600px',
    '& img':{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '10px',
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
      '&:hover':{
        transform: 'scale(1.02)',
        
      }
    }
  },
  rightContent:{
    display: 'flex',
    flexDirection: 'column',
    gap: "8px",
  },
  productName:{
    '& h1':{
      fontSize: '2rem',
      fontWeight: 'bold',
    }
  },
  productPriceQuantity:{
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    marginBottom:"25px",
    '& h1':{
      fontSize: '.9rem',
      color: "#555",
    }
  },
  productColorVariant:{
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    
    '& span':{
      fontSize: '1rem',
      fontWeight: 'bold',
      color: "#555",
    }
  },

  productSizeVariant:{
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),    
    '& span':{
      fontSize: '1rem',
      fontWeight: 'bold',
      color: "#555",
    }
    
  }, 
  productButton:{
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: "40px",
    '& button':{
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.5s ease-in-out',
      '&:hover':{
        transform: 'scale(1.02)',
      }
    }
  },
  addButton:{
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  plusMinusbuttons:{
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    '& button':{
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.5s ease-in-out',
      '&:hover':{
        transform: 'scale(1.02)',
      }
    }
  },
}));