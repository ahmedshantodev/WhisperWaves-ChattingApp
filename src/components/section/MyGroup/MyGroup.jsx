import React from "react";
import "./myGroup.css";
import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import SearchBox from "../../layout/SearchBox/SearchBox";
import Image from "../../layout/Image";

const MyGroup = ({ margin }) => {
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
          <HiDotsVertical className="three-dots" />
        </Box>
        <SearchBox margin={"16px 0 0 0"} />
      </Box>
      <Box sx={{ height: "75%", overflowY: "auto", p: "0 10px" }}>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
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
                ES MERN 2303
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "290px",
                }}
              >
                random messege....
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "secondaryText.main",
                  position: "absolute",
                  right: "10px",
                  bottom: "8px",
                }}
              >
                - 30min
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyGroup;
