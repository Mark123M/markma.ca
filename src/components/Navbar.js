import { animate } from "motion";
import { Box, Grid2, Icon, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import { green } from "@mui/material/colors";

const iconStyles = {
  fontSize: {
    xs: 25,
    sm: 25,
    md: 30,
    lg: 35,
    xl: 35,
  }
}

const nameStyles = {
  width: {
    xs: "100px",
    sm: "100px",
    md: "125px",
    lg: "150px",
    xl: "150px",
  }
}

function Navbar() {
  return (
    <Box display={"flex"} width={"100%"}>
      <Box sx={nameStyles} width={"10px"}>
        <img className="name" src="" style={{width: "100%", filter:"opacity(80%)", objectFit: "contain", transform: "translate(0, 2px)"}}></img>
      </Box>
      <Grid2 container spacing={3} marginLeft={"auto"}>
        <EmailIcon className="icon" color="mytext" sx={iconStyles}/>
        <LinkedInIcon className="icon" color="mytext" sx={iconStyles}/>
        <GitHubIcon className="icon" color="mytext" sx={iconStyles}/>
      </Grid2>
    </Box>
  )
}

export default Navbar