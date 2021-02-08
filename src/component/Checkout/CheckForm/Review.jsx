import { List,Typography,ListItem,ListItemText} from '@material-ui/core'
import React from 'react'

const Review = ({cartToken}) => {
    console.log(cartToken);
    return (
       <>
       <Typography variant ='h6' gutterBottom> Order Summary</Typography>
        <List disablePadding>
        {cartToken.live.line_items.map((product)=> (
            <ListItem style={{padding:'10px 0'}} key= {product.name}>
                <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                <Typography variant ='body2'>{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
        ))}
        <ListItem style={{padding:'10px 0'}}>
            <ListItemText primary={`Total: ${cartToken.live.total.formatted_with_symbol}`}/>
        </ListItem>
        </List> 
       </>
    )
}

export default Review
