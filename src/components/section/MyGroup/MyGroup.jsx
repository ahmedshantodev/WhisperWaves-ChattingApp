import React, { useEffect, useState } from "react";
import "./myGroup.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";
import Modal from "@mui/material/Modal";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";

const MyGroup = ({ margin }) => {
  const db = getDatabase();
  const activeUserData = useSelector((state) => state.user.information);

  const [groupname, setGroupname] = useState("");
  const [grouplist, setGrouplist] = useState([]);
  const [groupMemberList, setGroupMemberList] = useState([]);
  const [groupUserList, setGroupUserList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [groupJoinedButtonList, setGroupJoinedButtonList] = useState([]);
  const [groupPendingButtonList, setGroupPendingButtonList] = useState([]);
  const [groupInformation, setGroupInformation] = useState([]);

  const [groupCreatModalShow, setGroupCreatModalShow] = useState(false);
  const handleGroupCreatModalOpen = () => setGroupCreatModalShow(true);
  const handleGroupCreatModalClose = () => setGroupCreatModalShow(false);

  const [groupInviteModalOpen, setGroupInviteModalOpen] = useState(false);
  const handleGroupInviteModalOpen = () => setGroupInviteModalOpen(true);
  const handleGroupInviteModalClose = () => setGroupInviteModalOpen(false);

  const [groupMemberModalShow, setGroupMemberModalShow] = useState(false);
  const handleGroupMemberModalOpen = (info) => {
    setGroupMemberModalShow(true);
    let groupMemberRef = ref(db, "groupjoinrequst");
    onValue(groupMemberRef, (snapeshot) => {
      let groupMemberArray = [];
      snapeshot.forEach((item) => {
        if (item.val().groupid == info.groupid) {
          groupMemberArray.push({ ...item.val(), grouprequstid: item.key });
        }
      });
      setGroupMemberList(groupMemberArray);
    });
  };
  const handleGroupMemberModalClose = () => setGroupMemberModalShow(false);

  const [groupMemberListModal, setGroupMemberListModal] = useState(false);
  const handleGroupMemberListModalOpen = (info) => {
    setGroupInformation({ ...info });
    setGroupMemberListModal(true);
    let memberListRef = ref(db, "groupmember");
    onValue(memberListRef, (snapshot) => {
      let memberListArray = [];
      snapshot.forEach((item) => {
        if (info.groupid == item.val().groupid) {
          memberListArray.push({ ...item.val(), groupmemberid: item.key });
        }
      });
      setGroupUserList(memberListArray);
    });
  };
  const handleGroupMemberListModalClose = () => setGroupMemberListModal(false);

  const handleCreateGroup = () => {
    set(push(ref(db, "groups/")), {
      groupname: groupname,
      adminname: activeUserData.displayName,
      adminuid: activeUserData.uid,
      adminprofile: activeUserData.photoURL,
    }).then(() => {
      setGroupCreatModalShow(false);
    });
  };

  useEffect(() => {
    const groupsRef = ref(db, "groups");
    onValue(groupsRef, (snapshot) => {
      let groupListArray = [];
      snapshot.forEach((item) => {
        if (activeUserData.uid == item.val().adminuid) {
          groupListArray.push({ ...item.val(), groupid: item.key });
        }
      });
      setGrouplist(groupListArray);
    });
  }, []);

  const handleGroupJoinReqAccept = (item) => {
    set(push(ref(db, "groupmember")), {
      ...item,
    }).then(() => {
      remove(ref(db, "groupjoinrequst/" + item.grouprequstid));
    });
  };

  const handleGroupJoinReqReject = (item) => {
    remove(ref(db, "groupjoinrequst/" + item.grouprequstid));
  };

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

  const handleAcceptAll = () => {
    groupMemberList.map((item) => {
      set(push(ref(db, "groupmember")), {
        ...item,
      }).then(() => {
        remove(ref(db, "groupjoinrequst/" + item.grouprequstid));
      });
    });
  };

  const handleRejectAll = () => {
    groupMemberList.map((item) => {
      remove(ref(db, "groupjoinrequst/" + item.grouprequstid));
    });
  };

  const handleMemberRemove = (item) => {
    remove(ref(db, "groupmember/" + item.groupmemberid));
  };

  useEffect(() => {
    let friendListRef = ref(db, "friends");
    onValue(friendListRef, (snapeshot) => {
      let friendListArray = [];
      snapeshot.forEach((item) => {
        if (
          activeUserData.uid == item.val().reciverid ||
          activeUserData.uid == item.val().senderid
        ) {
          friendListArray.push({ ...item.val() });
        }
      });
      setFriendList(friendListArray);
    });
  }, []);

  useEffect(() => {
    let joindedButtonRef = ref(db, "groupmember");
    onValue(joindedButtonRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().groupid + item.val().requstsenderuid);
      });
      setGroupJoinedButtonList(array);
    });
  }, []);

  useEffect(() => {
    let PendingButtonRef = ref(db, "groupinvitation");
    onValue(PendingButtonRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().groupid + item.val().memberid);
      });
      setGroupPendingButtonList(array);
    });
  }, []);

  const handleSendInvite = (item) => {
    set(push(ref(db, "groupinvitation")), {
      memberid:
        activeUserData.uid == item.senderid ? item.reciverid : item.senderid,
      membername:
        activeUserData.uid == item.senderid
          ? item.recivername
          : item.sendername,
      memberprofile:
        activeUserData.uid == item.senderid
          ? item.reciverprofile
          : item.senderprofile,
      ...groupInformation,
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
            My Group
          </Typography>
          {/* <HiDotsVertical className="three-dots" /> */}
          <Button variant="contained" onClick={handleGroupCreatModalOpen}>
            create group
          </Button>
          <Modal
            open={groupCreatModalShow}
            onClose={handleGroupCreatModalClose}
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
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{ height: "75%", overflowY: "auto", p: "0 10px" }}>
        {grouplist.map((item) => (
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
              position: "relative",
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
                    width: "220px",
                  }}
                >
                  Admin: {item.adminname}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" onClick={() => handleGroupMemberModalOpen(item)}>
                  Join Reqsut
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleGroupMemberListModalOpen(item)}
                  sx={{ width: "125px", mt: "1px" }}
                >
                  Members
                </Button>
                <Modal
                  open={groupMemberModalShow}
                  onClose={handleGroupMemberModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Button
                      onClick={handleAcceptAll}
                      variant="contained"
                      color="success"
                      sx={{ mb: "20px" }}
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="contained"
                      color="error"
                      sx={{ mb: "20px", ml: "10px" }}
                    >
                      Reject All
                    </Button>
                    {groupMemberList.map((item) => (
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
                          position: "relative",
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
                            imageLink={item.requstsenderprofile}
                            altText={"userProfile"}
                            className={"group-profile-image"}
                          />
                          <Box sx={{ ml: "16px", width: "300px" }}>
                            <Typography
                              variant="h5"
                              sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                            >
                              {item.requstsendername}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{ fontSize: "15px", fontWeight: "semiBold" }}
                            >
                              wants to join {item.groupname}
                            </Typography>
                          </Box>
                          <Box>
                            <Button
                              onClick={() => handleGroupJoinReqAccept(item)}
                              sx={{ mr: "10px" }}
                              variant="contained"
                              color="success"
                            >
                              accept
                            </Button>
                            <Button
                              onClick={() => handleGroupJoinReqReject(item)}
                              variant="contained"
                              color="error"
                            >
                              reject
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Modal>
                {/* group member part */}
                <Modal
                  open={groupMemberListModal}
                  onClose={handleGroupMemberListModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Button
                      onClick={handleGroupInviteModalOpen}
                      variant="contained"
                      sx={{ mb: "20px" }}
                    >
                      Invite
                    </Button>
                    <Modal
                      open={groupInviteModalOpen}
                      onClose={handleGroupInviteModalClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        {friendList.map((item) => (
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
                              position: "relative",
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
                                  activeUserData.uid == item.senderid
                                    ? item.reciverprofile
                                    : item.senderprofile
                                }
                                altText={"userProfile"}
                                className={"group-profile-image"}
                              />
                              <Box sx={{ ml: "16px", width: "300px" }}>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontSize: "18px",
                                    fontWeight: "semiBold",
                                  }}
                                >
                                  {activeUserData.uid == item.senderid ? item.recivername : item.sendername}
                                  {/* {(activeUserData.uid == item.senderid ? item.reciverid : item.senderid) + groupInformation.groupid} */}
                                  
                                </Typography>
                              </Box>
                              {groupPendingButtonList.includes((activeUserData.uid == item.senderid ? item.reciverid : item.senderid) + groupInformation.groupid) || groupPendingButtonList.includes(groupInformation.groupid + (activeUserData.uid == item.senderid ? item.reciverid : item.senderid)) ? (
                                <Button
                                  variant="contained"
                                  sx={{ ml: "55px" , width: "155px" }}
                                >
                                  pending
                                </Button>
                              ) : groupJoinedButtonList.includes((activeUserData.uid == item.senderid ? item.reciverid : item.senderid) + groupInformation.groupid) || groupJoinedButtonList.includes(groupInformation.groupid + (activeUserData.uid == item.senderid ? item.reciverid : item.senderid)) ? (
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  sx={{ ml: "55px" , width: "155px" }}
                                >
                                  already joined
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => handleSendInvite(item)}
                                  variant="contained"
                                  color="success"
                                  sx={{ ml: "55px" , width: "155px" }}
                                >
                                  Invite
                                </Button>
                              ) }
                              {/* )} */}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Modal>
                    {groupUserList.map((item) => (
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
                          position: "relative",
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
                            imageLink={item.requstsenderprofile}
                            altText={"userProfile"}
                            className={"group-profile-image"}
                          />
                          <Box sx={{ ml: "16px", width: "300px" }}>
                            <Typography
                              variant="h5"
                              sx={{ fontSize: "18px", fontWeight: "semiBold" }}
                            >
                              {item.requstsendername}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{ fontSize: "15px", fontWeight: "semiBold" }}
                            >
                              Member of: {item.groupname}
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            color="error"
                            sx={{ ml: "100px" }}
                            onClick={() => handleMemberRemove(item)}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Modal>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyGroup;
