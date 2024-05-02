import React from "react";
import "./friends.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";

const Friends = () => {
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
            Friends
          </Typography>
          <HiDotsVertical className="three-dots" />
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{ height: "75%", overflowY: "scroll", p: "0 10px", cursor: "pointer" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "8px",
            mb: "8px",
            borderBottom: "1px solid #dedede",
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
                redux complate.....
              </Typography>
            </Box>
          </Box>
          <HiDotsHorizontal className="friends-list-item-threedots" />
        </Box>
      </Box>
    </Box>
  );
};

export default Friends;
