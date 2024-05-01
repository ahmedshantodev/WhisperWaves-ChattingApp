import React from "react";
import "./home.css";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ p: "48px 24px" }}>
      <Grid container>
        <Grid item xs={4}>
          a
        </Grid>
        <Grid item xs={4}>
          b
        </Grid>
        <Grid item xs={4}>
          c
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
