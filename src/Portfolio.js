import Navbar from './components/Navbar'
import Bio from './components/Bio';
import { Box, Grid2, Divider, Typography } from '@mui/material';
import Post from './components/Post';
import './Portfolio.css';

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
    <div className="text-divider" style={{marginTop: "10px"}}>
      <Typography color="mytitle" bgcolor={"#e9946b"} borderRadius={"3%"} padding="0 1% 0 1%" fontFamily={"Poppins"} fontWeight={500} sx={titleStyles}>
        {text}
      </Typography>
    </div>
  )
}

function Portfolio({experiencePosts, projectPosts}) {
  return (
    <Box display={"flex"} width={"100%"} height={"100%"} paddingTop={"20px"} justifyContent={"center"} bgcolor={"#FAE7C4"}>
      <Box display={"flex"} flexDirection={"column"} width={"90%"} maxWidth={950}>
        <Bio />
        <Section text={"Experiences"} />
        <Box marginTop={"3px"}></Box>
        {experiencePosts.map((p, idx) => (
          <Post key={`experience-post-` + idx} title={p.title} date={p.date} desc={p.desc} points={p.points} sources={p.sources}/>
        ))}
        <Section text={"Projects"} />
        <Box marginTop={"3px"}></Box>
        {projectPosts.map((p, idx) => (
          <Post key={`project-post-` + idx} title={p.title} date={p.date} desc={p.desc} points={p.points} sources={p.sources}/>
        ))}
      </Box>
    </Box>
  );
}

export default Portfolio;
