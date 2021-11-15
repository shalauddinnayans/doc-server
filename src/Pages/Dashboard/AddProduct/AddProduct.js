import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };

  const handleAddProductSubmit = (e) => {
    fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAddProductSubmit}>
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Product url"
          variant="standard"
          name="url"
          type="url"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Price"
          variant="standard"
          name="price"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Reating"
          variant="standard"
          name="reating"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Category"
          variant="standard"
          name="category"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-multiline-static"
          label="Product Description"
          multiline
          rows={4}
          variant="standard"
          name="description"
          onBlur={handleOnBlur}
        />
        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
