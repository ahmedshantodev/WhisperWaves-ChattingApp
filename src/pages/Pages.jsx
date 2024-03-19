import { Box, Grid } from "@mui/material";
import React from "react";
import SideBarMenu from "./Sidebar Menu/SideBarMenu";
import { Outlet } from "react-router-dom";

const Pages = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={1}>
          <SideBarMenu />
        </Grid>
        <Grid xs={11}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pages;
