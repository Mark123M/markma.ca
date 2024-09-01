import { animate } from "motion";
import { Box, Grid2, Typography } from "@mui/material";
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
    <Box display={"inline-block"} marginLeft={"15px"}>
      <Grid2 container spacing={1}>
        <EmailIcon className="icon" color="mytext" sx={iconStyles}/>
        <LinkedInIcon className="icon" color="mytext" sx={iconStyles}/>
        <GitHubIcon className="icon" color="mytext" sx={iconStyles}/>
      </Grid2>
    </Box>
  )
}

export default Navbar