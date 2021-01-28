import React from 'react';
import { Grid } from "@material-ui/core";
import Product from "../Products/product/Product";
import useStyles from "./ProductsStyle";


const Products = ({productList, onAddToCart}) => {
    const classes = useStyles()
return(
    <main className={classes.root}>
        <Grid container justify='center' spacing={4} className={classes.content}>
                {
                    productList.map((product) =>(
                        <Grid item key ={product.id} xs ={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={ onAddToCart}/>
                        </Grid>
                    )
                    )
                }
            </Grid>
    </main>
)

}

export default Products
