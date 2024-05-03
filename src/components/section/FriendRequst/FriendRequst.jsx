import React, { useEffect, useState } from "react";
import "./friendRequst.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
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

const FriendRequst = ({ margin }) => {
  const db = getDatabase();
  const [friendRequstList, setFriendRequstList] = useState([]);
  const userInfo = useSelector((state) => state.user.information);
  useEffect(() => {
    const friendRequstRef = ref(db, "friendrequst");
    onValue(friendRequstRef, (snapshot) => {
      let friendRequstListArray = [];
      snapshot.forEach((item) => {
        if (userInfo.uid == item.val().whoreciveid) {
          friendRequstListArray.push({
            ...item.val(),
            id: item.key,
          });
        }
      });
      setFriendRequstList(friendRequstListArray);
    });
  }, []);

  const handleFriendRequstAccept = (item) => {
    set(push(ref(db, "friends/")), {
      ...item,
    }).then(() => {
      remove(ref(db, "friendrequst/" + item.id));
    });
  };

  const handleFriendRequstReject = (item) => {
    remove(ref(db, "friendrequst/" + item.id));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        borderRadius: "10px",
        boxShadow: 3,
        p: "16px",
        margin: margin,
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
            Friend Request
          </Typography>
          <HiDotsVertical className="three-dots" />
        </Box>
      </Box>
      <Box sx={{ height: "86%", overflowY: "auto", p: "0 10px" }}>
        {friendRequstList.map((item) => (
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
                imageLink={item.whosendprofile}
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{
                    width: "161px",
                    fontSize: "18px",
                    fontWeight: "semiBold",
                  }}
                >
                  {item.whosendname}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                onClick={() => handleFriendRequstAccept(item)}
                variant="contained"
                sx={{ mr: "5px" }}
              >
                Confirm
              </Button>
              <Button
                onClick={() => handleFriendRequstReject(item)}
                variant="contained"
              >
                Reject
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FriendRequst;
