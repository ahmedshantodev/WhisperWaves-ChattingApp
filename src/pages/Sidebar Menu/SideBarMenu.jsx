import { Box, Typography } from "@mui/material";
import React from "react";
import "./SideBarMenu.css";
import Menu from "../../components/section/Menu/Menu";
import Image from "../../components/layout/Image";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBarMenu = () => {
  const userInfo = useSelector((state) => state.user.information);

  return (
    <Box
      id="side-bar-menu"
      sx={{
        height: "100vh",
        boxShadow: "7",
        p: "50px 40px 40px 24px",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "30px", fontFamily: "Poppins", fontWeight: "bold" }}
      >
        Chatt!
      </Typography>
      <Menu />
      <Box
        sx={{
          width: "185px",
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          imageLink={userInfo?.photoURL}
          altText={"profile-image"}
          className={"profile-image"}
        />
        <Box>
          <Link to={"/pages/account-setting"}>
            <Typography
              sx={{
                fontWeight: "500",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "135px",
                textTransform: "capitalize",
              }}
            >
              {userInfo?.displayName}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "secondaryText.main" }}>
              Profile Edit
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarMenu;
