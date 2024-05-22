import React, { useEffect, useState } from "react";
import "./groupList.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";

const GroupList = () => {
  const db = getDatabase();
  const activeUserData = useSelector((state) => state.user.information);
  const [groupList, setGroupList] = useState([]);
  const [groupPendingButtonList, setGroupPendingButtonList] = useState([]);
  const [groupJoinedButtonList, setGroupJoinedButtonList] = useState([]);
  const [groupname, setGroupname] = useState("");
  const [groupInvitationList, setGroupInvitationList] = useState([])

  const [groupCreateModalShow, setGroupCreateModalShow] = useState(false);
  const handlegroupCreateModalSOpen = () => setGroupCreateModalShow(true);
  const handlegroupCreateModalClose = () => setGroupCreateModalShow(false);

  const [groupInvitationModalShow, setGroupInvitationModalShow] =
    useState(false);
  const handleGroupInvitationModalOpen = () =>
    setGroupInvitationModalShow(true);
  const handleGroupInvitationModalClose = () =>
    setGroupInvitationModalShow(false);

  useEffect(() => {
    let groupRef = ref(db, "groups");
    onValue(groupRef, (snapshot) => {
      let groupListArray = [];
      snapshot.forEach((item) => {
        if (activeUserData.uid != item.val().adminuid) {
          groupListArray.push({ ...item.val(), groupid: item.key });
        }
      });
      setGroupList(groupListArray);
    });
  }, []);

  useEffect(() => {
    let setGroupInvitationListRef = ref(db, "groupinvitation");
    onValue(setGroupInvitationListRef, (snapshot) => {
      let setGroupInvitationListArray = [];
      snapshot.forEach((item) => {
        if (activeUserData.uid == item.val().memberid) {
          setGroupInvitationListArray.push({...item.val(), invitationid: item.key});
        }
      });
      setGroupInvitationList(setGroupInvitationListArray);
    });
  }, []);

  const handleGroupJoin = (item) => {
    set(push(ref(db, "groupjoinrequst")), {
      ...item,
      requstsenderuid: activeUserData.uid,
      requstsendername: activeUserData.displayName,
      requstsenderprofile: activeUserData.photoURL,
    });
  };

  useEffect(() => {
    let joindedButtonRef = ref(db, "groupmember");
    onValue(joindedButtonRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().requstsenderuid + item.val().groupid);
      });
      setGroupJoinedButtonList(array);
    });
  }, []);

  useEffect(() => {
    let pendingRef = ref(db, "groupjoinrequst");
    onValue(pendingRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().requstsenderuid + item.val().groupid);
      });
      setGroupPendingButtonList(array);
    });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleCreateGroup = () => {
    set(push(ref(db, "groups/")), {
      groupname: groupname,
      adminname: activeUserData.displayName,
      adminuid: activeUserData.uid,
      adminprofile: activeUserData.photoURL,
    }).then(() => {
      setGroupCreateModalShow(false);
    });
  };

  const handleInvitationAccept = (item) => {
    console.log(item)
    set(push(ref(db , "groupmember")) , {
      adminname: item.adminname,
      adminprofile: item.adminprofile,
      adminuid: item.adminuid,
      groupid: item.groupid,
      groupname: item.groupname,
      requstsenderuid: item.memberid,
      requstsendername: item.membername,
      requstsenderprofile: item.memberprofile,
    }).then(() => {
      remove(ref(db , "groupinvitation/" + item.invitationid))
    })
  }

  const handleInvitationReject = (item) => {
    remove(ref(db , "groupinvitation/" + item.invitationid))
  }

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
          {/* <HiDotsVertical className="three-dots" /> */}
          <Button
            onClick={handleGroupInvitationModalOpen}
            variant="contained"
            color="success"
            sx={{ ml: "35px" }}
          >
            Group Invitation
          </Button>
          <Button variant="contained" onClick={handlegroupCreateModalSOpen}>
            Create Group
          </Button>
          <Modal
            open={groupCreateModalShow}
            onClose={handlegroupCreateModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                label="group name"
                onChange={(e) => setGroupname(e.target.value)}
              />
              <br />
              <Button onClick={handleCreateGroup}>create</Button>
            </Box>
          </Modal>
          <Modal
            open={groupInvitationModalShow}
            onClose={handleGroupInvitationModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {groupInvitationList.map((item) => (
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
                      "https://myways-public-data-prod.s3.ap-south-1.amazonaws.com/myways-resource-library/blogs/stats-related-to-mern-stack-in-industry_Image_blogs.jpg"
                    }
                    altText={"userProfile"}
                    className={"group-profile-image"}
                  />
                  <Box sx={{ ml: "16px" }}>
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                    >
                      {item.groupname}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "secondaryText.main",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "250px",
                      }}
                    >
                      admin: {item.adminname}
                    </Typography>
                  </Box>
                </Box>
                <Button variant="contained" onClick={() => handleInvitationAccept(item)} color="success" sx={{ml: "55px"}}>accept</Button>
                <Button variant="contained" onClick={() => handleInvitationReject(item)} color="error">rejcet</Button>
              </Box>
              ))}
            </Box>
          </Modal>
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{ height: "75%", overflowY: "auto", p: "0 10px" }}>
        {groupList.map((item) => (
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
                  "https://myways-public-data-prod.s3.ap-south-1.amazonaws.com/myways-resource-library/blogs/stats-related-to-mern-stack-in-industry_Image_blogs.jpg"
                }
                altText={"userProfile"}
                className={"group-profile-image"}
              />
              <Box sx={{ ml: "16px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                >
                  {item.groupname}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "secondaryText.main",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "250px",
                  }}
                >
                  Admin: {item.adminname}
                </Typography>
              </Box>
            </Box>
            {groupPendingButtonList.includes(activeUserData.uid + item.groupid) || groupPendingButtonList.includes( item.groupid + activeUserData.uid) ? (
              <Button variant="contained" color="secondary">pending</Button>
            ) : groupJoinedButtonList.includes(activeUserData.uid + item.groupid) || groupPendingButtonList.includes(item.groupid + activeUserData.uid) ? (
              <Button
                variant="contained"
                color="success"
                sx={{ textTransform: "lowercase" }}
              >
                Joined
              </Button>
            ) : (
              <Button variant="contained" onClick={() => handleGroupJoin(item)}>
                join
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GroupList;
