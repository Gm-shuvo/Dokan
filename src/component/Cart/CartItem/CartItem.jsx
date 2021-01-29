import { Card, CardMedia,CardContent,Typography, CardActions, Button, IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons';
import React from 'react'
import useStyles from "./CartItemStyle";
const CartItem = ({cartItem,handleUpdateCart,
    handleRemoveCart}) => {
    console.log(cartItem);
    


    const classes = useStyles()
    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={cartItem.media.source} title={cartItem.name} />
                <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                            {cartItem.name}
                    </Typography>

                </CardContent>
                <CardActions className={classes.CardActions}>
                    <div className={classes.buttons} >
                         <Button type ='button' size='large' color='primary'className={classes.Button} onClick={()=> handleUpdateCart(cartItem.id, cartItem.quantity - 1) }>
                            -
                        </Button>
                        <Typography variant='body2' >
                            {cartItem.quantity}
                        </Typography>
                        <Button type ='button' size='large' color='primary'className={classes.Button} onClick={()=> handleUpdateCart(cartItem.id, cartItem.quantity + 1) }>
                            +
                        </Button>
                    </div>

                </CardActions>
                <div className="removeCart" style={{display:'flex',alignItems:'center'}}>
                    <IconButton aria-label='Remove from cart' onClick={()=>handleRemoveCart(cartItem.id)}>
                       <DeleteForever/>

                    </IconButton>
                </div>
            </Card>
    )
}

export default CartItem
