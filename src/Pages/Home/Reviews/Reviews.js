import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Typography sx={{ textAlign: "center", m: 5 }} variant="h2">
        What Customer says About Us
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        sx={{ mb: 5 }}
      >
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={3} key={review._id}>
            <Review review={review}></Review>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
