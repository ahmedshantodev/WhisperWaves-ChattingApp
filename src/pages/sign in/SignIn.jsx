import React, { useState } from "react";
import "./signIn.css";
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const [loadingButtonShow, setLoadingButtonShow] = useState(false);
  const [credentialErrorShow, setCredentialErrorShow] = useState(false);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signInError, setSignInError] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (element) => {
    setSignInData({
      ...signInData,
      [element.target.name]: element.target.value,
    });
    setSignInError({
      ...signInError,
      [element.target.name]: "",
    });
    setCredentialErrorShow(false);
  };

  const handleAccoutCreate = () => {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!signInData.email) {
      setSignInError({ ...signInError, email: "Please Enter Your Email" });
    } else if (!pattern.test(signInData.email)) {
      setSignInError({ ...signInError, email: "Please Enter a valid email" });
    } else if (!signInData.password) {
      setSignInError({ ...signInError, password: "Please Enter Password" });
    } else {
      setLoadingButtonShow(true);
      signInWithEmailAndPassword(auth, signInData.email, signInData.password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified) {
            toast.success(
              "You've successfully logged in. Enjoy your experience!",
              {
                position: "bottom-center",
                autoClose: 3000,
                theme: "dark",
              }
            );
            setSignInData({ email: "", password: "" });
            setLoadingButtonShow(false);
            navigate("/pages/home");
          } else {
            setLoadingButtonShow(false);
            toast.error("Please Varify Your Email First", {
              position: "bottom-center",
              autoClose: 3000,
              theme: "dark",
            });
          }
        })
        .catch((error) => {
          setLoadingButtonShow(false);
          const errorMessage = error.message;
          if (errorMessage.includes("auth/invalid-credential")) {
            setCredentialErrorShow(true);
          }
        });
    }
  };

  return (
    <section>
      <Box>
        <Grid container>
          <Grid
            item
            xs={6.7}
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
                Login to your account!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <SignButton>
                  <FcGoogle className="google-icon" />
                  Continue With Google
                </SignButton>
                <SignButton>
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
                    name="email"
                    value={signInData.email}
                    type="text"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ width: "100%", mb: "28px" }}
                  />
                  {signInError.email && (
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
                      {signInError.email}
                    </Alert>
                  )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    value={signInData.password}
                    onChange={handleInputChange}
                    name="password"
                    type={passwordShow ? "text" : "password"}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                  {signInError.password && (
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
                      {signInError.password}
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
                <Link to={"/forget-password"} className="forget-password">
                  forget password?
                </Link>
              </Box>

              <Box sx={{ pt: "40px", position: "relative" }}>
                {credentialErrorShow && (
                  <Alert
                    severity="error"
                    sx={{
                      width: "100%",
                      mb: "10px",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      zIndex: "9",
                    }}
                  >
                    Invalid email or password. Please try again
                  </Alert>
                )}
                {loadingButtonShow ? (
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      width: "100%",
                      borderRadius: "6px",
                      mb: "20px",
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
              </Box>

              <Link to={"/"} className="link">
                <Typography
                  sx={{
                    py: "12px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    color: "#a1a1a1",
                  }}
                >
                  Already have an account?
                  <span className="hightLight-txt">Sign Up</span>
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={5.3}>
            <Box
              sx={{
                bgcolor: "primaryColor.main",
                py: "70px",
                pr: "50px",
                borderRadius: "70px 0 0 70px",
                height: "100vh",
                position: "relative",
                textAlign: "end",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translate(-50% ,-50%)",
                }}
              >
                <Image
                  imageLink={messegelogo}
                  altText={"triangle icon"}
                  className={"masseg-icon"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row-reverse",
                }}
              >
                <picture>
                  <Image imageLink={triangle} altText={"triangle icon"} />
                </picture>
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    mr: "20px",
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
                  ml: "auto",
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
                  right: 50,
                  fontFamily: "roboto",
                }}
              >
                Monsur Ahmed Shanto - ES MERN 2303
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default SignIn;
