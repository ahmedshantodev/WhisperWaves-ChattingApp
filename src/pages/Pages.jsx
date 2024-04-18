import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SideBarMenu from "./Sidebar Menu/SideBarMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Pages = () => {
  let navigate = useNavigate();
  let data = useSelector((state) => state?.user?.information);

  useEffect(() => {
    if (!data?.email) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item xs={1.3}>
          <SideBarMenu />
        </Grid>
        <Grid item xs={10.7}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pages;
