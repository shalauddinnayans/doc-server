import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

const TopSales = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Typography sx={{ textAlign: "center", m: 5 }} variant="h2">
        All Toys
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        sx={{ mb: 5 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <ProductCard product={product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopSales;
