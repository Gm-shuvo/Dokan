import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root:{
        maxWidth:'100%',
    },
    media:{
        height:'200',
        width:'200',
        paddingTop:'56.25%',
        backgroundSize:'contain'

    },
    cardContent:{
      display:'flex',
      justifyContent:'space-between',
      
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    name:{
        textOverflow:'ellipsis',
        overflow:'hidden'
    }
}))
