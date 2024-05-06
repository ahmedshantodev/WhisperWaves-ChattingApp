import React from "react";
import "./home.css";
import { Box, Grid } from "@mui/material";
import GroupList from "../../components/section/GroupList/GroupList";
import Friends from "../../components/section/Friends.jsx/Friends";
import FriendRequst from "../../components/section/FriendRequst/FriendRequst";
import People from "../../components/section/People/People";
import BlockList from "../../components/section/BlockList/BlockList";

const Home = () => {
  return (
    <Box sx={{ p: "48px 50px", height: "100dvh", overflowY: "scroll" }}>
      <Grid container>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <GroupList />
          <FriendRequst margin={"50px 0 0 0"}/>
        </Grid>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <Friends />
          <BlockList margin={"50px 0 0 0"}/>
        </Grid>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <People />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
