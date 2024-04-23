import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Menu.css";
import { TiHome } from "react-icons/ti";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import List from "../../layout/List";
import ListItem from "../../layout/ListItem";

const Menu = () => {
  return (
    <section id="sidebar-menu">
      <Box sx={{ mt: "33px" }}>
        <List className={"menu"}>
          <ListItem>
            <NavLink
              to="/pages/home"
              className={({ isActive }) =>
                isActive ? "menu-item-acitve" : "menu-item"
              }
            >
              <TiHome className="menu-icon" />
              home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/pages/chat"
              className={({ isActive }) =>
                isActive ? "menu-item-acitve" : "menu-item"
              }
            >
              <HiOutlineChatBubbleLeft className="menu-icon" />
              Chat
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/pages/group"
              className={({ isActive }) =>
                isActive ? "menu-item-acitve" : "menu-item"
              }
            >
              <HiOutlineUsers className="menu-icon" />
              Group
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/pages/friends"
              className={({ isActive }) =>
                isActive ? "menu-item-acitve" : "menu-item"
              }
            >
              <HiOutlineUser className="menu-icon" />
              Friends
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </section>
  );
};

export default Menu;
