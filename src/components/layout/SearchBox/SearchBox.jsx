import React from "react";
import "./searchBox.css";
import { Box } from "@mui/material";
import Input from "../Input";
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ margin }) => {
  return (
    <Box
      sx={{
        border: "1px solid #dedede",
        borderRadius: "6px",
        m: margin,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
      }}
    >
      <IoIosSearch className="search-icon" />
      <Input
        type={"text"}
        placeholder={"search"}
        className={"search-box-input"}
      />
    </Box>
  );
};

export default SearchBox;
