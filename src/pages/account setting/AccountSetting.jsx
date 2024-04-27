import { Box, Button, Typography } from "@mui/material";
import React, { useState, createRef } from "react";
import { toast } from "react-toastify";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../../slices/userSlices";
import "./accountSetting.css";
import Image from "../../components/layout/Image";
import { MdModeEdit } from "react-icons/md";
import coverPhoto from "/public/image/coverPhoto2.jpg";
import profileImage from "/public/image/WhatsApp Image 2024-01-23 at 2.39.21 PMdsd.jpeg";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";

// react cropper package
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const AccountSetting = () => {
  const userInfo = useSelector((state) => state.user.information);
  const auth = getAuth();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const storage = getStorage();
  const storageRef = ref(storage, `profile-${userInfo.uid}`);

  const [profileEditModalOpen, setProfileEditModalOpen] = useState(false);
  const handleProfileEditModalOpen = () => setProfileEditModalOpen(true);
  const handleProfileEditModalClose = () => setProfileEditModalOpen(false);

  const [profileImageModalOpen, setProfileImageModalOpen] = useState(false);
  const handleProfileImageModalOpen = () => setProfileImageModalOpen(true);
  const handleProfileImageModalClose = () => setProfileImageModalOpen(false);

  // react cropper package
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  const handleProfileImageUploadData = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  // getCropData
  const photoUpload = () => {
    const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
    uploadString(storageRef, message4, "data_url").then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        console.log("File available at", downloadURL);
        updateProfile(auth.currentUser, {
          photoURL: downloadURL,
        }).then(() => {
          localStorage.setItem(
            "user",
            JSON.stringify({ ...userInfo, photoURL: downloadURL })
          );
          dispatch(activeUser({ ...userInfo, photoURL: downloadURL }));
        });
      });
    });
  };

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
              imageLink={userInfo.photoURL}
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

                  bgcolor: "white",
                  border: "2px solid white",
                  boxShadow: 2,
                  borderRadius: "10px",
                  overflow: "hidden",
                  p: 7,
                  boxSizing: "border-box",
                }}
              >
                <Typography>Upload New Photo As Profile Picture</Typography>
                <input type="file" onChange={handleProfileImageUploadData} />
                <IoClose
                  onClick={handleProfileImageModalClose}
                  className="profileEditModalCloseBtn"
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <div className="box">
                    <h1>Preview</h1>
                    <div
                      className="img-preview"
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                  <Cropper
                    ref={cropperRef}
                    style={{ height: 400 }}
                    zoomTo={0.1}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                  />
                </Box>
                <Button
                  onClick={photoUpload}
                  variant="contained"
                  sx={{ width: "400px", margin: "50px 300px 0px" }}
                >
                  upload photo
                </Button>
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
                {userInfo.displayName}
              </Typography>
              <Typography className="bio" sx={{ width: "380px" }}>
                Stay Home Stay Safe
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
