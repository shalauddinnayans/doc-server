import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Container sx={{ my: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">We write really great emails.</Typography>
            <Typography variant="body1">
              Share your email with us, and we'll let you know about the latest
              deals newest products & more.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form>
              <TextField
                required
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                // onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Sign Up for Emails
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography>GET IN TOUCH</Typography>
            <ul>
              <li>
                <a href="fa">Update Your Email</a>
              </li>
            </ul>
            <Typography>LET'S CONNECT</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography>SHIPPING & RETURNS</Typography>
            <ul>
              <li>
                <a href="fa">Track Order</a>
              </li>
              <li>
                <a href="fa">Shipping Info</a>
              </li>
              <li>
                <a href="fa">Store Pickup</a>
              </li>
              <li>
                <a href="fa">Same Day Delivery</a>
              </li>
              <li>
                <a href="fa">Returns</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography>SERVICES & SOLUTIONS</Typography>
            <ul>
              <li>
                <a href="fa">Track Order</a>
              </li>
              <li>
                <a href="fa">Shipping Info</a>
              </li>
              <li>
                <a href="fa">Store Pickup</a>
              </li>
              <li>
                <a href="fa">Same Day Delivery</a>
              </li>
              <li>
                <a href="fa">Returns</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography>COMPANY INFO</Typography>
            <ul>
              <li>
                <a href="fa">Track Order</a>
              </li>
              <li>
                <a href="fa">Shipping Info</a>
              </li>
              <li>
                <a href="fa">Store Pickup</a>
              </li>
              <li>
                <a href="fa">Same Day Delivery</a>
              </li>
              <li>
                <a href="fa">Returns</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
