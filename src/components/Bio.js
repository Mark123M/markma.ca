import { animate } from "motion";
import { Box, Grid2, Typography } from "@mui/material";
import Navbar from "./Navbar";


const containerStyles = {
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row"
  },
}
const faceStyles = {
  minWidth: {
    xs: "100px",
    sm: "100px",
    md: "140px",
    lg: "140px",
    xl: "140px",
  },
  maxWidth: {
    xs: "100px",
    sm: "100px",
    md: "140px",
    lg: "140px",
    xl: "140px",
  },
  transform: "translate(0px, 0px)",
  aspectRatio: "1/1"
}
const textStyles = {}
const titleStyles = {
  fontSize: {
    xs: "24px",
    sm: "24px",
    md: "36px",
    lg: "36px",
    xl: "36px"
  }
}
const bodyStyles = {
  fontSize: {
    xs: "14px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  }
}

function Bio() {
  return (
    <Box display={"flex"} width={"100%"} sx = {containerStyles}>
        <Box display={"flex"} sx={faceStyles}>
            <img src="./face.jpg" style={{width: "100%", height: "auto", objectFit: "contain"}}></img>
        </Box>
        <Box display={"flex"} marginLeft={"20px"} flexDirection={"column"} sx = {textStyles}>
          <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
            <Box>
              <Typography color={"#704e8b"} fontFamily={"Poppins"} fontWeight={600} sx={titleStyles} >
                Hello, I'm Mark!
              </Typography>
            </Box>
            <Navbar/>
          </Box>
          <Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>
              I'm a third year Computer Science student at the University of Waterloo. I'm passionate for developing high performance software, modelling complex systems, and exploring low level programming. I have over a year of professional experience in game programming and fullstack development, and I'm open to work in Summer 2025.
          </Typography>
        </Box>
    </Box>
  )
}

export default Bio