import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const OrderCard = ({ order }) => {
  const { name, price, address, email } = order;
  return (
    <Card sx={{ width: 345, height: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>${price}</Typography>
        <Typography>{email}</Typography>
        <Typography>{address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cancle</Button>
      </CardActions>
    </Card>
  );
};

export default OrderCard;
