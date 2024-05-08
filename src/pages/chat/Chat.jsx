import React, { useState } from "react";
import "./chat.css";
import { Box, Typography } from "@mui/material";
import Image from "../../components/layout/Image";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import Input from "../../components/layout/Input";
import { FaPlus, FaRegImage, FaFile } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Chat = () => {
  const [friendsProfileOpen, setFriendsProfileOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#f4f4f4",
        p: "20px 0px",
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: "100%",
          bgcolor: "white",
          borderRadius: "15px",
          p: "24px 10px 20px 10px",
          m: "0px 10px 0px 20px",
          boxShadow: 3,
        }}
      >
        <Box sx={{ height: "15%", p: "0 10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
              Chats
            </Typography>
            <BiSolidEdit className="chat-edit-icon" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid  #dedede",
              borderRadius: "25px",
              overflow: "hidden",
              mt: "16px",
              bgcolor: "#f4f4f4",
            }}
          >
            <IoMdSearch className="chat-search-icon" />
            <Input
              placeholder={"search messenger"}
              type={"text"}
              className={"chat-input"}
            />
          </Box>
        </Box>
        <Box sx={{ overflowY: "auto", height: "85%" }}>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
          <Box
            className={"chat-item"}
            sx={{
              display: "flex",
              alignItems: "center",
              p: "14px 12px",
              borderRadius: "6px",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#556487",
              },
              cursor: "pointer",
            }}
          >
            <Image
              imageLink={"/public/image/profile image one.png"}
              altText={"random user image"}
              className={"chat-profile-image"}
            />
            <Box sx={{ ml: "16px" }}>
              <Typography
                className="hover-white"
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "semiBold" }}
              >
                ES MERN 2303
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "220px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                className="hover-gray"
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                30min
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "85%", p: "0 20px 0 10px", display: "flex" }}>
        <Box
          sx={{
            width: `${friendsProfileOpen ? "70%" : "100%"}`,
            height: "100%",
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: "15px",
            position: "relative",
            overflow: "hidden",
            transition: "ease-in-out all 0.1s",
          }}
        >
          <Box
            sx={{
              p: "12px",
              borderBottom: "2px solid #dedede",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "0.3s",
                ":hover": { bgcolor: "borderColor.main" },
              }}
            >
              <Link className="chat-user-satting-page">
                <Image
                  imageLink={"/public/image/profile image one.png"}
                  altText={"random user image"}
                  className={"chat-profile-image"}
                />
                <Typography
                  sx={{ ml: "13px", fontSize: "18px", fontWeight: "semibold" }}
                >
                  Ahmed Shanto
                </Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IoCall className="chat-icons" />
              <IoVideocam className="chat-icons" />
              <HiDotsVertical
                onClick={() => setFriendsProfileOpen(!friendsProfileOpen)}
                className={
                  friendsProfileOpen ? "chat-icons-active" : "chat-icons"
                }
              />
            </Box>
          </Box>
          <Box sx={{ bgcolor: "#dedede", opacity: "50%", height: "100%" }}>
            messege
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              p: "9px 5px 9px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "white",
            }}
          >
            <Box>
              <FaPlus className="chat-file-icons" />
              <FaRegImage className="chat-file-icons" />
              <FaFile className="chat-file-icons" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "80%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#f3f3f5",
                  overflow: "hidden",
                  borderRadius: "25px",
                  border: "1px solid #dedede",
                  width: "100%",
                }}
              >
                <Input
                  placeholder={"enter your messege"}
                  className={"messege-input"}
                />
                <BsEmojiSmileFill className="emoji-icon" />
              </Box>
              <ThumbUpIcon className="ThumbUpIcon" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            transition: "ease-in-out all 0.1s",
            width: friendsProfileOpen ? "30%" : "0%",
            height: "100%",
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: "15px",
            ml: friendsProfileOpen ? "20px" : "0px",
            position: "relative",
            overflow: "hidden",
            p: "50px 0",
            textAlign: "center",
          }}
        >
          <Image
            imageLink={"/public/image/profile image one.png"}
            altText={"random"}
            className={"chat-setting-profile"}
          />
          <Typography
            sx={{ fontSize: "20px", m: "5px 0 0 0", fontWeight: "500" }}
          >
            Ahmed Shanto
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
