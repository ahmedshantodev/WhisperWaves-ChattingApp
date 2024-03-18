import React, { useState } from "react";
import "./signUp.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "../../components/layout/Image";
import triangle from "../../../public/image/triangle.png";
import messegelogo from "../../../public/image/messegelogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import SignButton from "../../components/layout/SignInButton/SignButton";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const [loadingButtonShow, setLoadingButtonShow] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUpError, setSignUpError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (element) => {
    setSignUpData({
      ...signUpData,
      [element.target.name]: element.target.value,
    });
    setSignUpError({
      ...signUpError,
      [element.target.name]: "",
    });
  };

  const handleAccoutCreate = () => {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!signUpData.name) {
      setSignUpError({ ...signUpError, name: "Please Enter Your Name" });
    } else if (!signUpData.email) {
      setSignUpError({ ...signUpError, email: "Please Enter Your Email" });
    } else if (!pattern.test(signUpData.email)) {
      setSignUpError({ ...signUpError, email: "Please Enter a valid email" });
    } else if (!signUpData.password) {
      setSignUpError({ ...signUpError, password: "Please Enter Password" });
    } else if (signUpData.password.length < 6) {
      setSignUpError({ ...signUpError, password: "Minimum 6 Chararters" });
    } else {
      setLoadingButtonShow(true);
      createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      )
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            toast.success(
              "Registration Successfull, Please check your email for verification",
              {
                position: "bottom-center",
                autoClose: 3000,
                theme: "dark",
              }
            );
            setLoadingButtonShow(false);
            setSignUpData({ name: "", email: "", password: "" });
            navigate("/sign-in");
          });
        })
        .catch((error) => {
          setLoadingButtonShow(false);
          const errorMessage = error.message;
          console.log(errorMessage);
          if (errorMessage.includes("auth/email-already-in-use")) {
            setSignUpError({
              ...signUpError,
              email:
                "that email is already in use. Please use a different email",
            });
          }
        });
    }
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Registration Successfull", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
        navigate("/home");
      })
      .catch((error) => {});
  };

  const handleFaceBookSignUp = () => {
    console.log("facebook");
  };

  return (
    <section>
      <Box>
        <Grid container>
          <Grid item xs={4.8}>
            <Box
              sx={{
                bgcolor: "primaryColor.main",
                py: "70px",
                pl: "50px",
                borderRadius: "0 70px 70px 0",
                height: "100vh",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translate(50% , -50%)",
                }}
              >
                <Image imageLink={messegelogo} altText={"triangle icon"} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <picture>
                  <Image imageLink={triangle} altText={"triangle icon"} />
                </picture>
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    ml: "20px",
                  }}
                >
                  Whisper Waves
                </Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  mt: "70px",
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Chatting Application
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "roboto",
                  color: "white",
                  fontStyle: "italic",
                  mt: "20px",
                  display: "block",
                  width: "415px",
                  lineHeight: "25px",
                }}
              >
                Make your free account and connect with your buddies and chat
                with them for FREE!
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: 70,
                  left: 50,
                  fontFamily: "roboto",
                }}
              >
                Monsur Ahmed Shanto - ES MERN 2303
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={7.2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "500px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "28px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                Create account
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <SignButton onClick={handleGoogleSignUp}>
                  <FcGoogle className="google-icon" />
                  Continue With Google
                </SignButton>
                <SignButton onClick={handleFaceBookSignUp}>
                  <FaFacebook className="facebook-icon" />
                  Continue With Google
                </SignButton>
              </Box>
              <Typography
                sx={{
                  color: "secondaryText.main",
                  fontSize: "12px",
                  mt: "70px",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#a1a1a1",
                }}
              >
                - OR -
              </Typography>
              <Box sx={{ mt: "25px" }}>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    onChange={handleInputChange}
                    name="name"
                    value={signUpData.name}
                    type="text"
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    sx={{ width: "100%", mb: "28px" }}
                  />
                  {signUpError.name && (
                    <Alert
                      severity="error"
                      sx={{
                        width: "100%",
                        position: "absolute",
                        bottom: "-20px",
                        left: "0",
                        zIndex: "5",
                      }}
                    >
                      {signUpError.name}
                    </Alert>
                  )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    onChange={handleInputChange}
                    name="email"
                    value={signUpData.email}
                    type="text"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ width: "100%", mb: "28px" }}
                  />
                  {signUpError.email && (
                    <Alert
                      severity="error"
                      sx={{
                        width: "100%",
                        position: "absolute",
                        bottom: "-20px",
                        left: "0",
                        zIndex: "5",
                      }}
                    >
                      {signUpError.email}
                    </Alert>
                  )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    value={signUpData.password}
                    onChange={handleInputChange}
                    name="password"
                    type={passwordShow ? "text" : "password"}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                  {signUpError.password && (
                    <Alert
                      severity="error"
                      sx={{
                        width: "100%",
                        position: "absolute",
                        bottom: "-50px",
                        left: "0",
                        zIndex: "5",
                      }}
                    >
                      {signUpError.password}
                    </Alert>
                  )}
                  {passwordShow ? (
                    <FaEye
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="eye-icon"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="eye-icon"
                    />
                  )}
                </Box>
              </Box>

              {loadingButtonShow ? (
                <Button
                  variant="outlined"
                  sx={{
                    mt: "55px",
                    width: "100%",
                    borderRadius: "6px",
                    bgcolor: "primaryColor.main",
                    mb: "20px",
                    ":hover": {
                      bgcolor: "primaryColor.main",
                    },
                  }}
                >
                  <ColorRing
                    visible={true}
                    height="37"
                    width="37"
                    ariaLabel="color-ring-loading"
                    wrapperClass="color-ring-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </Button>
              ) : (
                <Button
                  onClick={handleAccoutCreate}
                  variant="contained"
                  sx={{
                    mt: "55px",
                    width: "100%",
                    borderRadius: "6px",
                    bgcolor: "primaryColor.main",
                    py: "12px",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    mb: "20px",
                    ":hover": {
                      bgcolor: "primaryColor.main",
                    },
                    ":active": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  Create Your Account
                </Button>
              )}

              <Link to={"/sign-in"} className="link">
                <Typography
                  sx={{
                    py: "10px",
                    fontFamily: "Poppins",
                    color: "#a1a1a1",
                  }}
                >
                  Already have an account?
                  <span className="hightLight-txt">Login</span>
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default SignIn;
