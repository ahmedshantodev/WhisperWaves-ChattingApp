import React from "react";
import { Button } from "@mui/material";

const SignButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        width: { xs: "100%", sm: "48%" },
        border: 1,
        borderColor: "#A1A1A1",
        py: {xs: "5px",lg:"10px"},
        borderRadius: "8px",
        fontSize: {xs: "10px",lg:"12px"},
        m: {xs: "0 0 8px 0" , sm: "0px"},
        color: "secondaryText.main",
        "&:active": {
          transform: "scale(1.02)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default SignButton;
