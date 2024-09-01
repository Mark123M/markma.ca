import { animate } from "motion";
import { Box, Grid2, Icon, Typography } from "@mui/material";


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
  transform: "translate(0px, 5px)",
  aspectRatio: "1/1"
}
const textStyles = {
  margin: {
    xs: "10px 20px 10px 0px",
    sm: "10px 20px 10px 0px",
    md: "40px 0px 0px 30px",
    lg: "40px 0px 0px 30px",
    xl: "40px 0px 0px 30px"
  }
}
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
        <Box display={"flex"} paddingTop={"40px"} sx={faceStyles}>
            <img src="./face.jpg" style={{width: "100%", height: "auto", objectFit: "contain"}}></img>
        </Box>
        <Box display={"flex"} flexDirection={"column"} sx = {textStyles}>
          <Typography color={"#704e8b"} fontFamily={"Poppins"} fontWeight={600} sx={titleStyles}>
            Hello, I'm Mark!
          </Typography>
          <Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>
              I'm a third year Computer Science student at the University of Waterloo. I'm passionate for developing high performance software, modelling complex systems, and exploring low level programming. I have over a year of professional experience in game programming and fullstack development, and I'm open to work in Summer 2025.
          </Typography>
        </Box>
    </Box>
  )
}

export default Bio