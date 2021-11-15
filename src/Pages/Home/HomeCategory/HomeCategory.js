import { Container, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { NavLink } from "react-router-dom";

const HomeCategory = () => {
  return (
    <Container sx={{ mb: 5 }}>
      <Typography sx={{ textAlign: "center", mb: 5 }} variant="h2">
        Shop By Catagory
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        // sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <NavLink to="/topsales">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 240,
                  height: 240,
                },
              }}
            >
              <Paper variant="outlined" square>
                <img
                  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/BABY_FW33_1014_Web_Toy-Shop-L1_C15-12v3_A-1?$content$&wid=240"
                  alt=""
                  width="240px"
                />
              </Paper>
            </Box>
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NavLink to="/topsales">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 240,
                  height: 240,
                },
              }}
            >
              <Paper variant="outlined" square>
                <img
                  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/BABY_FW33_1014_Web_Toy-Shop-L1_C15-12v3_A-2?$content$&wid=240"
                  alt=""
                />
              </Paper>
            </Box>
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NavLink to="/topsales">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 240,
                  height: 240,
                },
              }}
            >
              <Paper variant="outlined" square>
                <img
                  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/11_01-SkipHop-ToyShop-C15-12v3_C-3_IMAGE?$content$&wid=240"
                  alt=""
                />
              </Paper>
            </Box>
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NavLink to="/topsales">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 240,
                  height: 240,
                },
              }}
            >
              <Paper variant="outlined" square>
                <img
                  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/11_01-FisherPrice-ToyShop-C15-12v3_A-4_IMAGE?$content$&wid=240"
                  alt=""
                />
              </Paper>
            </Box>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeCategory;
