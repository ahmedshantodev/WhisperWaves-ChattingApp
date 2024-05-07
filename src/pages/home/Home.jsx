import React from "react";
import "./home.css";
import { Box, Grid } from "@mui/material";
import GroupList from "../../components/section/GroupList/GroupList";
import FriendsList from "../../components/section/FriendsList/FriendsList";
import FriendRequst from "../../components/section/FriendRequst/FriendRequst";
import People from "../../components/section/People/People";
import BlockList from "../../components/section/BlockList/BlockList";
import MyGroup from "../../components/section/MyGroup/MyGroup";

const Home = () => {
  return (
    <Box sx={{ p: "48px 50px", height: "100dvh", overflowY: "scroll" }}>
      <Grid container>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <People />
          <FriendRequst margin={"50px 0 0 0"}/>
        </Grid>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <FriendsList />
          <BlockList margin={"50px 0 0 0"}/>
        </Grid>
        <Grid item xs={4} p={"0 30px 0 0"}>
          <GroupList />
          <MyGroup margin={"50px 0 0 0"}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
