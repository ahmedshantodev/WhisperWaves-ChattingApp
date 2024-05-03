import React, { useEffect, useState } from "react";
import "./friends.css";
import { Box, Typography } from "@mui/material";
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const Friends = () => {
  const db = getDatabase();
  const [friendsList, setFriendsList] = useState([]);
  const activeUserData = useSelector((state) => state.user.information);

  useEffect(() => {
    onValue(ref(db, "friends"), (snapshot) => {
      let friendsArray = [];
      snapshot.forEach((item) => {
        if ( activeUserData.uid == item.val().whosendid || activeUserData.uid == item.val().whoreciveid ) {
          friendsArray.push({
            ...item.val(),
            id: item.key,
          });
        }
      });
      setFriendsList(friendsArray);
    });
  }, []);

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
          overflowY: "scroll",
          p: "0 10px",
        }}
      >
        {friendsList.map((item) => (
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
                imageLink={
                  activeUserData.uid == item.whoreciveid
                    ? item.whosendprofile
                    : item.whoreciveprofile
                }
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                >
                  {activeUserData.uid == item.whoreciveid
                    ? item.whosendname
                    : item.whorecivename}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", color: "secondaryText.main" }}
                >
                  random messege.....
                </Typography>
              </Box>
            </Box>
            <HiDotsHorizontal className="friends-list-item-threedots" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Friends;
