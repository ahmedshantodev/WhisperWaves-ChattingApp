import React from "react";
import { Button } from "@mui/material";

const SignButton = ({ children }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "48%",
        border: 1,
        borderColor: "#A1A1A1",
        py: "10px",
        borderRadius: "8px",
        fontSize: "12px",
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
