import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:{
    marginTop: "30px",
    width: "100%",
    
  },
  titleContainer:{
    display: 'flex',
    alignItems: 'center',
    
    paddingBottom: "10px",
    
  },
  title:{
    fontSize: '1.3rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: "#555",
    paddingBottom: "10px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
      fontSize: '1rem',
    },
  },
  content:{
    display: 'flex',
    width: "80%",
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]:{
      width: "90%",
    },
  },

  contentText:{
    marginTop: "20px",
    fontSize: '1rem',
    color: "#555",
    lineHeight: '1.5',
    letterSpacing: '1px',
  },                                    
  
  active:{
    // border bottom indicator
    color: "black",
    borderBottom: "2px solid #555",

  },
  contentReview:{
    maxHeight: "400px",
    overflow: "scroll",
    // scrollbar & custom style
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
    },
  }

}));