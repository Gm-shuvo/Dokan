import { List, Typography, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import React from 'react';

const Review = ({ cartToken }) => {
    console.log(cartToken);
    return (
        <>
            <Typography variant='h6' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {cartToken.line_items?.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <img
                            src={product.media.source}
                            alt={product.name}
                            style={{
                                
                                height: '36px',
                                borderRadius: '8px',
                                marginRight: '10px',
                            }}
                        />
                        <ListItemText
                            primary={product.name}
                            secondary={`Quantity: ${product.quantity}`}
                        />
                        <Typography variant='body2'>{product.price.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary={`Total: ${cartToken.subtotal.formatted_with_symbol}`} />
                </ListItem>
            </List>
        </>
    );
};

export default Review;
