import React, { useEffect, useState } from "react";
import "./friendRequst.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import Image from "../../layout/Image";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequst = ({ margin }) => {
  const db = getDatabase();
  const [friendRequstList, setFriendRequstList] = useState([]);
  const userInfo = useSelector((state) => state.user.information);


console.log(friendRequstList)
  useEffect(() => {
    const friendRequstRef = ref(db, "friendrequst");
    onValue(friendRequstRef, (snapshot) => {
      let friendRequstListArray = [];
      snapshot.forEach((item) => {
        if (userInfo.uid == item.val().whoreciveid) {
          friendRequstListArray.push({
            // bhujte hobe
            ...item.val(),
            id: item.key
          });
        }
      });

      setFriendRequstList(friendRequstListArray);
    });
  }, []);

  const handleFriendRequstReject = (item) => { 
    remove(ref(db , "friendrequst/" + item.id ))
  }

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
              <Button variant="contained" sx={{ mr: "10px" }}>
                Confirm
              </Button>
              <Button onClick={() => handleFriendRequstReject(item)} variant="contained">Reject</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FriendRequst;
