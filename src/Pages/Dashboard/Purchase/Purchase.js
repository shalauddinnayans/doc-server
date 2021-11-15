import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Purchase = () => {
  const { Id } = useParams();
  const [product, setProduct] = useState();
  const [orderInfo, setOrderInfo] = useState();
  const orderProduct = { ...product };
  const { name, price } = orderProduct;
  useEffect(() => {
    const url = `http://localhost:5000/products/${Id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  //   console.log(product);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  console.log(name);
  const handleOrderSubmit = (e) => {
    const order = {
      ...orderInfo,
      name,
      price,
    };
    fetch("http://localhost:5000/orders", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <form onSubmit={handleOrderSubmit}>
          <TextField
            disabled
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            variant="standard"
            name="product"
            value={name}
          />
          <TextField
            disabled
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            variant="standard"
            name="price"
            value={price}
          />
          <TextField
            required
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            type="email"
            onBlur={handleOnBlur}
          />
          <TextField
            required
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            name="phone"
            onBlur={handleOnBlur}
          />
          <TextField
            required
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Addresss"
            variant="standard"
            name="address"
            onBlur={handleOnBlur}
          />
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Order
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Purchase;
