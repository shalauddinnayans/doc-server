import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddReview = () => {
  const [review, setReview] = useState();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  const handleReviewSubmit = (e) => {
    const reviews = {
      ...review,
      name: "ad",
      ImgUrl: "ad",
    };
    fetch("http://localhost:5000/reviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
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
          Add Review
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
