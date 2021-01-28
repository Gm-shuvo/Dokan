import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
    media: {
        height: 120,
        width:120,
        marginLeft:'12px',
        backgroundSize:'contain'
      },
      root: {
        display: 'flex',
        justifyContent:'space-between',
        marginLeft:'10px'
      },
      
      cartActions: {
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
      },
      minusButton:{
        border:'1px solid'
        
      },
      plusButton:{
        border:'1px solid'
      },
}))