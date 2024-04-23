import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeUser } from "../../slices/userSlices";
import "./accountSetting.css";
import Image from "../../components/layout/Image";
import { MdModeEdit } from "react-icons/md";
import coverPhoto from "/public/image/coverPhoto2.jpg";
import profileImage from "/public/image/WhatsApp Image 2024-01-23 at 2.39.21 PMdsd.jpeg";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";

const AccountSetting = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [profileEditModalOpen, setProfileEditModalOpen] = useState(false);
  const handleProfileEditModalOpen = () => setProfileEditModalOpen(true);
  const handleProfileEditModalClose = () => setProfileEditModalOpen(false);

  const [profileImageModalOpen, setProfileImageModalOpen] = useState(false);
  const handleProfileImageModalOpen = () => setProfileImageModalOpen(true);
  const handleProfileImageModalClose = () => setProfileImageModalOpen(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log-out Successfull", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
        localStorage.removeItem("user");
        dispatch(activeUser(null));
        navigate("/sign-in");
      })
      .catch((error) => {});
  };

  return (
    <section className="account-setting-container">
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "30px" }}
      >
        <Box
          sx={{
            width: "70%",
            borderRadius: "10px",
            boxShadow: "5",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              imageLink={coverPhoto}
              altText={"random-image"}
              className={"coverPhoto"}
            />
            <Image
              onClick={handleProfileImageModalOpen}
              imageLink={profileImage}
              altText={"random-profile"}
              className={"profileImage"}
            />
            <Modal
              open={profileImageModalOpen}
              onClose={handleProfileImageModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 700,
                  bgcolor: "white",
                  border: "2px solid white",
                  boxShadow: 2,
                  borderRadius: "10px",
                }}
              >
                <IoClose
                  onClick={handleProfileImageModalClose}
                  className="profileEditModalCloseBtn"
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </Box>
          <Box
            sx={{
              m: "80px 45px 30px 45px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                className="name"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Monsur Ahmed Shanto
              </Typography>
              <Typography className="bio" sx={{ width: "380px" }}>
                Frontend Developer | React Js | Firebase
              </Typography>
            </Box>
            <Button
              onClick={handleProfileEditModalOpen}
              variant="contained"
              sx={{ p: "10px 20px", gap: "5px" }}
            >
              <MdModeEdit className="edit-icon" /> Edit Profile
            </Button>
            <Modal
              open={profileEditModalOpen}
              onClose={handleProfileEditModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 700,
                  bgcolor: "white",
                  border: "2px solid white",
                  boxShadow: 2,
                  borderRadius: "10px",
                }}
              >
                <IoClose
                  onClick={handleProfileEditModalClose}
                  className="profileEditModalCloseBtn"
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    p: "20px 0",
                    borderBottom: "2px solid #d8dadf",
                  }}
                >
                  Edit Profile
                </Typography>
                <Box sx={{ p: "10px" }}>
                  lsjdljfals;djfl lsjdljfals;djfl lsjdljfals;djfl
                  lsjdljfals;djfl lsjdljfals;djfl lsjdljfals;djfl
                  lsjdljfals;djfl lsjdljfals;djfl lsjdljfals;djfl
                  lsjdljfals;djfl lsjdljfals;djfl lsjdljfals;djfl
                  lsjdljfals;djfl
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
        <Box sx={{ width: "30%", borderRadius: "10px", boxShadow: "5" }}>
          <Button
            onClick={handleSignOut}
            sx={{
              bgcolor: "green",
              py: "15px",
              px: "30px",
              color: "white",
              ":hover": {
                color: "white",
                bgcolor: "green",
              },
            }}
          >
            log out
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default AccountSetting;
