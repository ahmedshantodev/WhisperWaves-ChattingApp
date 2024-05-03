import React from "react";
import "./groupList.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";

const GroupList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        borderRadius: "10px",
        boxShadow: 3,
        p: "16px",
      }}
    >
      <Box sx={{ pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "semibold" }}>
            Group
          </Typography>
          <HiDotsVertical className="three-dots" />
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{height: "75%" , overflowY: "auto", p: "0 10px"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
              px: "5px",
              borderBottom: "1px solid #dedede",
              ":hover": {
                bgcolor: "#dedede",
              },
              cursor: "pointer",
          }}
          className={"group-list-item"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              imageLink={"/public/image/Ellipse 1.png"}
              altText={"userProfile"}
              className={"group-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "secondaryText.main" }}
              >
                random messege.....
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">Join</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupList;
