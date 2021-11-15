import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TopProductCard = ({ product }) => {
  const { _id, name, url, price, reating, description } = product;
  return (
    <Card sx={{ width: 345, height: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="236px"
        width="236px"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography>{reating}</Typography>
        <Typography>${price}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/purchase/${_id}`}>
          <Button size="small">Buy Now</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TopProductCard;
