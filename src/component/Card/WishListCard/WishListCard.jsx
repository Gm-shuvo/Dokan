import React from "react";
import { useStyles } from "./WishListCardStyles";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { useHistory } from "react-router-dom";


const WishListCard = ({wish, removeFromWishlist}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root} style={{textDecoration: "none"}}>
      <CardContent className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image={wish.media.source}
          title={wish.name}
        />
        <div className={classes.title}>
          <Typography variant="subtitle2">{wish.name}</Typography>
          <Typography
            variant="body2"
            style={{ color: "gray", display: "flex", gap: "6px"}}
          >
            <span>{`Quantity: ${wish.quantity}`}</span>
            <span>{`Each: ${wish.price.raw} tk`}</span>
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div >
          <IconButton
          aria-label="view product"
          color="primary"
          className={classes.button}
          onClick={() => {history.push({pathname: `/product/${wish.id}`, state: {wish}})}}
          >
            View
          </IconButton>

        </div>
        <div
          className={classes.removeButton}
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconButton
            aria-label="Remove from cart"
            color="secondary"
            onClick={(e) => {e.stopPropagation(); removeFromWishlist(wish.id)}}
          >
            <DeleteForever />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  )
}

export default WishListCard;