import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton  } from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons";
import useStyle from "./ProductStyle";
import LinesEllipsis from 'react-lines-ellipsis'
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
const Product = ({product,onAddToCart}) => {
    const classes = useStyle() 
    
    return (
       
        <Card className ={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title ={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom className={classes.name} >
                            <LinesEllipsis
                                    text=  {product.name}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                            />
                        </Typography>
                      
                </div>   

                <HTMLEllipsis
                    unsafeHTML={product.description}
                    maxLine='4'
                    ellipsis='...'
                    basedOn='letters'
                />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                    <Typography variant ='body2'  >
                                {product.price.formatted_with_symbol}
                    </Typography>

                    <IconButton aria-label='Add to card'  onClick={()=> onAddToCart(product.id, 1)} >
                        <AddShoppingCart/>
                    </IconButton>
             </CardActions>
                
        </Card>
    )
}

export default Product
