import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import React, { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";

const BlockList = ({ margin }) => {
  const db = getDatabase();
  const activeUserData = useSelector((state) => state.user.information);
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    let blockRef = ref(db, "block");
    onValue(ref(db, "block"), (snapshot) => {
      let blockListArray = [];
      snapshot.forEach((item) => {
        if (activeUserData.uid == item.val().blockbyid) {
          blockListArray.push({ ...item.val(), id: item.key });
        }
      });
      setBlockList(blockListArray);
    });
  }, []);

  const handleUnblock = (item) => {
    set(push(ref(db, "friends/")), {
      reciverid: item.blockbyid,
      recivername: item.blockbyname,
      reciverprofile: item.blockbyprofile,
      senderid: item.blockid,
      sendername: item.blockname,
      senderprofile: item.blockprofile,
    }).then(() => {
      remove(ref(db, "block/" + item.id));
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
            Block List
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
        {blockList.map((item, index) => (
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
                imageLink={item.blockprofile}
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                >
                  {item.blockname}
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => handleUnblock(item)}
              color="error"
              variant="contained"
              sx={{ width: "110px" }}
            >
              unblock
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlockList;
