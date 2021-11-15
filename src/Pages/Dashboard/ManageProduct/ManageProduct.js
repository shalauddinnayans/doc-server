import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ManageProductCard from "./ManageProductCard/ManageProductCard";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://calm-sands-96963.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const removeProduct = (id) => {
    const url = `http://calm-sands-96963.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("removed");
          const remaningProduct = products.filter(
            (product) => product._id !== id
          );
          setProducts(remaningProduct);
        }
      });
  };
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        sx={{ mb: 5 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <ManageProductCard
              product={product}
              removeProduct={removeProduct}
            ></ManageProductCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageProduct;
