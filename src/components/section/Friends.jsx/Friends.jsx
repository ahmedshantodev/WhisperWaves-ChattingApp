import React, { useEffect, useState } from "react";
import "./friends.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";

const Friends = () => {
  const db = getDatabase();
  const [friendsList, setFriendsList] = useState([]);
  const activeUserData = useSelector((state) => state.user.information);
  // const [itemMenuOpen, setItemMenuOpen] = useState(false);

  useEffect(() => {
    onValue(ref(db, "friends"), (snapshot) => {
      let friendsArray = [];
      snapshot.forEach((item) => {
        if (
          activeUserData.uid == item.val().senderid ||
          activeUserData.uid == item.val().reciverid
        ) {
          friendsArray.push({
            ...item.val(),
            id: item.key,
          });
        }
      });
      setFriendsList(friendsArray);
    });
  }, []);

  const handleFriendBlock = (item) => {
    if (activeUserData.uid == item.senderid) {
      set(push(ref(db, "block/")), {
        blockbyname: activeUserData.displayName,
        blockbyid: activeUserData.uid,
        blockbyprofile: activeUserData.photoURL,
        blockname: item.recivername,
        blockid: item.reciverid,
        blockprofile: item.reciverprofile,
      }).then(() => {
        remove(ref(db, "friends/" + item.id));
      });
    } else if (activeUserData.uid == item.reciverid) {
      set(push(ref(db, "block/")), {
        blockbyname: activeUserData.displayName,
        blockbyid: activeUserData.uid,
        blockbyprofile: activeUserData.photoURL,
        blockname: item.sendername,
        blockid: item.senderid,
        blockprofile: item.senderprofile,
      }).then(() => {
        remove(ref(db, "friends/" + item.id));
      });
    }
  };

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
      <Box
        sx={{
          height: "75%",
          overflowY: "auto",
          p: "0 10px",
        }}
      >
        {friendsList.map((item , index) => (
          <Box key={index}
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
                imageLink={
                  activeUserData.uid == item.reciverid
                    ? item.senderprofile
                    : item.reciverprofile
                }
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                >
                  {activeUserData.uid == item.reciverid
                    ? item.sendername
                    : item.recivername}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", color: "secondaryText.main" }}
                >
                  random messege.....
                </Typography>
              </Box>
            </Box>
            <Button
              color="error"
              variant="contained"
              onClick={() => handleFriendBlock(item)}
              sx={{
                width: "110px",
              }}
            >
              block
            </Button>
            {/* <Box sx={{ position: "relative" }}>
              <HiDotsVertical
                onClick={() => setItemMenuOpen(!itemMenuOpen)}
                className="friends-list-item-threedots"
              />
              {itemMenuOpen && (
                <Box
                  sx={{
                    p: "5px",
                    bgcolor: "white",
                    boxShadow: 5,
                    position: "absolute",
                    top: "75%",
                    left: "-90%",
                    zIndex: "9",
                  }}
                >
                  <Button>block</Button>
                  <Button>block</Button>
                </Box>
              )}
            </Box> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Friends;
