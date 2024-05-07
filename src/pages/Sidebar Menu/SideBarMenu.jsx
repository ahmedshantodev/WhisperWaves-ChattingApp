import { Box, Typography } from "@mui/material";
import React from "react";
import "./SideBarMenu.css";
import Menu from "../../components/section/Menu/Menu";
import Image from "../../components/layout/Image";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBarMenu = () => {
  const activeUserData = useSelector((state) => state.user.information);
  const navigate = useNavigate();

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
          ":hover": {
            bgcolor: "#dedede"
          },
          p: "5px",
          borderRadius: "10px"
        }}
      >
        <Link className="link" to={"/pages/account-setting"}>
          <Image
            imageLink={activeUserData?.photoURL}
            altText={"profile-image"}
            className={"profile-image"}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "130px",
                textTransform: "capitalize",
              }}
            >
              {activeUserData?.displayName}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "secondaryText.main" }}>
              Profile Edit
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default SideBarMenu;
