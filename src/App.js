import './App.css';
import Navbar from './components/Navbar'
import Bio from './components/Bio';
import { Box, Grid2, Divider, Typography } from '@mui/material';
import Post from './components/Post';

const titleStyles = {
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "22px",
    lg: "22px",
    xl: "22px"
  }
}

function Section({text}) {
  return (
    <div class="text-divider" style={{marginTop: "10px"}}>
      <Typography color="mytext" fontFamily={"Poppins"} fontWeight={500} sx={titleStyles}>
        Experiences
      </Typography>
    </div>
  )
}

function App() {
  return (
    <Box display={"flex"} width={"100%"} height={"100%"} paddingTop={"20px"} justifyContent={"center"}>
      <Box display={"flex"} flexDirection={"column"} width={"90%"} maxWidth={950}>
        <Navbar/>
        <Bio/>
        <Section text={"Experiences"}/>
        <Post></Post>
      </Box>
    </Box>
  );
}

export default App;
