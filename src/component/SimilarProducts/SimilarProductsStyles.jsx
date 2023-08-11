import { makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
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

}));