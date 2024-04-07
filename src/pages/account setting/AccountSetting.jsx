import { Button } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeUser } from "../../slices/userSlices";

const AccountSetting = () => {
  const auth = getAuth();
  let navigate = useNavigate()
  let dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success(
          "Log-out Successfull",
          {
            position: "bottom-center",
            autoClose: 3000,
            theme: "dark",
          }
        );
        localStorage.removeItem("user")
        dispatch(activeUser(null))
        navigate("/sign-in")
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <Button
        onClick={handleSignOut}
        sx={{
          m: "100px",
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
    </div>
  );
};

export default AccountSetting;
