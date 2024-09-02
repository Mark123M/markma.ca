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
        <a style={{textDecoration: 'none', color: 'black'}} href="https://www.github.com/Mark123M" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="icon" color="mytext" sx={iconStyles}/>
        </a>
        <a style={{textDecoration: 'none', color: 'black'}} href="mailto:m32ma@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          <EmailIcon className="icon" color="mytext" sx={iconStyles}/>
        </a>
        <a style={{textDecoration: 'none', color: 'black'}} href="https://www.linkedin.com/in/markma04/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="icon" color="mytext" sx={iconStyles}/>
        </a>
      </Grid2>
    </Box>
  )
}

export default Navbar