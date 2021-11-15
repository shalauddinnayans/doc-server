import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
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

export default ProductCard;
