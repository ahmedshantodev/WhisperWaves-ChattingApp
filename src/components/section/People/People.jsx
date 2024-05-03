import React, { useEffect, useState } from "react";
import "./people.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import { IoPersonAddSharp } from "react-icons/io5";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const People = () => {
  const db = getDatabase();
  const userInfo = useSelector((state) => state.user.information);
  const [userList, setuserList] = useState([]);
  const [friendRequst, setFriendRequst] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let userArray = [];
      snapshot.forEach((item) => {
        if (item.key != userInfo.uid) {
          userArray.push({
            userid: item.key,
            username: item.val().username,
            email: item.val().email,
            profilePicture: item.val().profile_picture,
          });
        }
      });
      setuserList(userArray);
    });
  }, []);

  useEffect(() => {
    const userRef = ref(db, "friendrequst");
    onValue(userRef, (snapshot) => {
      let friendRequstArray = [];
      snapshot.forEach((item) => {
        friendRequstArray.push(item.val().whoreciveid + item.val().whosendid);
      });
      setFriendRequst(friendRequstArray);
    });
  }, []);

  const handleFriendRequst = (item) => {
    set(push(ref(db, "friendrequst/")), {
      whosendid: userInfo.uid,
      whosendname: userInfo.displayName,
      whosendprofile: userInfo.photoURL,
      whoreciveid: item.userid,
      whorecivename: item.username,
      whoreciveprofile: item.profilePicture,
    });
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
            People
          </Typography>
          <HiDotsVertical className="three-dots" />
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{ height: "75%", overflowY: "auto", p: "0 10px" }}>
        {userList.map((item) => (
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
                imageLink={item.profilePicture}
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                >
                  {item.username}
                </Typography>
              </Box>
            </Box>
            {friendRequst.includes(item.userid + userInfo.uid) ||
            friendRequst.includes(userInfo.uid + item.userid) ? (
              <Button disabled variant="contained" sx={{ py: "10px" }}>
                pending
              </Button>
            ) : (
              <Button
                onClick={() => handleFriendRequst(item)}
                variant="contained"
                sx={{ p: "10px 0" }}
              >
                <IoPersonAddSharp />
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default People;
