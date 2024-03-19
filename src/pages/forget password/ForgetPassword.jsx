import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./forgetPassword.css";
import { MdOutlineMail } from "react-icons/md";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState("");
  const [loadingButtonShow, setLoadingButtonShow] = useState(false);

  const handleSendButtonClick = () => {
    if (resetEmail) {
      setLoadingButtonShow(true);
      sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          setLoadingButtonShow(false);
          setResetEmail("");
          toast.success("Please check your email for reset your password", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "dark",
          });
          navigate("/sign-in");
        })
        .catch((error) => {
          setLoadingButtonShow(false);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <section>
      <Box
        sx={{
          bgcolor: "primaryColor.main",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "600px",
            bgcolor: "white",
            borderRadius: "10px",
            px: "50px",
            py: "30px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "30px", fontWeight: "600" }}
          >
            Reset Password
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              mt: "10px",
              fontWeight: "500",
              color: "secondaryText.main",
            }}
          >
            Forgot your password? No problem! Enter your email address and we'll
            send you a link. Click Link & Enter Your New Password
          </Typography>
          <Typography
            sx={{
              mt: "18px",
              fontSize: "20px",
              fontFamily: "roboto",
              fontWeight: "500",
            }}
          >
            Enter Your Email
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              borderColor: "#d3d3d3",
              px: "15px",
              borderRadius: "6px",
              mt: "5px",
            }}
          >
            <MdOutlineMail className="icon" />
            <input
              value={resetEmail}
              name="email"
              onChange={(e) => setResetEmail(e.target.value)}
              type="text"
              placeholder="enter Your Email"
            />
          </Box>

          {loadingButtonShow ? (
            <Button
              variant="contained"
              disabled
              sx={{
                mt: "15px",
                width: "100%",
                borderRadius: "6px",
              }}
            >
              <ColorRing
                visible={true}
                height="36"
                width="36"
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </Button>
          ) : (
            <Button
              onClick={handleSendButtonClick}
              variant="contained"
              sx={{
                borderRadius: "6px",
                width: "100%",
                py: "10px",
                mt: "15px",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
            >
              Send reset Email
            </Button>
          )}
        </Box>
      </Box>
    </section>
  );
};

export default ForgetPassword;
