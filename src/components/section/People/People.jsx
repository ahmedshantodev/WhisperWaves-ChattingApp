import React, { useEffect, useState } from "react";
import "./people.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import { IoPersonAddSharp } from "react-icons/io5";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import { FaUserCheck, FaUserPlus, FaUserMinus } from "react-icons/fa6";

const People = () => {
  const db = getDatabase();
  const activeUserData = useSelector((state) => state.user.information);
  const [userList, setuserList] = useState([]);
  const [friendRequstPendingButton, setFriendRequstPendingButton] = useState(
    []
  );
  const [friendsButton, setFriendsButton] = useState([]);
  const [blockButton, setBlockButton] = useState([]);

  // user list
  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let userArray = [];
      snapshot.forEach((item) => {
        if (item.key != activeUserData.uid) {
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

  // friend requst
  useEffect(() => {
    const friendrequstRef = ref(db, "friendrequst");
    onValue(friendrequstRef, (snapshot) => {
      let friendRequstArray = [];
      snapshot.forEach((item) => {
        friendRequstArray.push(item.val().reciverid + item.val().senderid);
      });
      setFriendRequstPendingButton(friendRequstArray);
    });
  }, []);

  // frineds
  useEffect(() => {
    const friendsRef = ref(db, "friends");
    onValue(friendsRef, (snapshot) => {
      let friendsArray = [];
      snapshot.forEach((item) => {
        friendsArray.push(item.val().reciverid + item.val().senderid);
      });
      setFriendsButton(friendsArray);
    });
  }, []);

  // block
  useEffect(() => {
    const blockRef = ref(db, "block");
    onValue(blockRef, (snapshot) => {
      let blockArray = [];
      snapshot.forEach((item) => {
        blockArray.push(item.val().blockid + item.val().blockbyid);
      });
      setBlockButton(blockArray);
    });
  }, []);

  const handleFriendRequst = (item) => {
    set(push(ref(db, "friendrequst/")), {
      senderid: activeUserData.uid,
      sendername: activeUserData.displayName,
      senderprofile: activeUserData.photoURL,
      reciverid: item.userid,
      recivername: item.username,
      reciverprofile: item.profilePicture,
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
        {userList.map((item, index) => (
          <Box
            key={index}
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
            {friendRequstPendingButton.includes(
              item.userid + activeUserData.uid
            ) ||
            friendRequstPendingButton.includes(
              activeUserData.uid + item.userid
            ) ? (
              <Button
                variant="contained"
                disabled
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: "110px",
                }}
              >
                {/* <FaUserMinus /> Cancel */} pending
              </Button>
            ) : friendsButton.includes(activeUserData.uid + item.userid) ||
              friendsButton.includes(item.userid + activeUserData.uid) ? (
              <Button
                // disabled
                color="success"
                variant="contained"
                sx={{
                  width: "110px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaUserCheck /> Friends
              </Button>
            ) : blockButton.includes(activeUserData.uid + item.userid) ||
              blockButton.includes(item.userid + activeUserData.uid) ? (
              <Button
                color="error"
                variant="contained"
                sx={{
                  width: "110px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                block
              </Button>
            ) : (
              <Button
                onClick={() => handleFriendRequst(item)}
                variant="contained"
                sx={{
                  width: "110px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaUserPlus /> Send
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default People;
