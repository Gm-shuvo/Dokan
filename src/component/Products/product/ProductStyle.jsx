import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root:{
        maxWidth:'90%',
        
    },
    media:{
        height:'20',
        paddingTop:'56.25%'
    },
    cardContent:{
      display:'flex',
      justifyContent:'space-between',
      
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
}))
