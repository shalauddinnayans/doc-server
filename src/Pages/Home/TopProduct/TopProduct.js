import { Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopProductCard from "./TopProductCard/TopProductCard";

const TopProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://calm-sands-96963.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <Typography sx={{ textAlign: "center" }} variant="h2">
          Our Top Toys
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
          sx={{ mb: 5 }}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product._id}>
              <TopProductCard product={product}></TopProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TopProduct;
