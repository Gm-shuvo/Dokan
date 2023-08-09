import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    width: '80%',   
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },     
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: "20px",
    
  },
  lordIcon: {
    width: '60px',
    height: '60px',
  },
  textGradient: {
    backgroundImage: 'linear-gradient(45deg, #F06A9B, #6C63FF)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontSize: "22px", 
    fontWeight: "bold"
  },
  seeMoreLink: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    float: "right",
    
    //a tag
    '& > a': {
      display: 'flex',
      alignItems: 'center',
      fontSize: "18px", 
      gap: theme.spacing(2),
      textDecoration: 'none',
      marginTop: theme.spacing(3),
      backgroundImage: 'linear-gradient(45deg, #F06A9B, #6C63FF)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    },
   
  },
}));

export default useStyles;
