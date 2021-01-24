import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton  } from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons";
import useStyle from "./ProductStyle";
const Product = ({product}) => {
    const classes = useStyle() 
    return (
       <Card className ={classes.root}>
           <CardMedia className={classes.media} image={product.image} title ={product.name} />
           <CardContent>
               <div className={classes.cardContent}>
                   <Typography variant='h5' gutterBottom>
                    {product.name}
                   </Typography>
                   <div/>
                    <Typography variant ='h4' >
                        {product.description}
                    </Typography>
               </div>
               <div className="shopping-card">
                   <CardActions disableSpacing className={classes.CardActions}>
                       <Typography variant ='body2' >
                           {product.price}
                       </Typography>

                    <IconButton aria-label='Add to card'>
                        <AddShoppingCart/>
                    </IconButton>
                   </CardActions>
               </div>
           </CardContent>
       </Card>
    )
}

export default Product
