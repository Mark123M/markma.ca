import { animate } from "motion";
import { Box, Grid2, Icon, Typography, Divider } from "@mui/material";

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
  width: "100%"
}
const titleStyles = {
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "22px",
    lg: "22px",
    xl: "22px"
  }
}
const bodyStyles = {
  fontSize: {
    xs: "14px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
}

function Points({points}) {
  return (
    <Box sx={{transform: "translate(-10px, -15px)"}}>
      <ul>
        {points.map((p) => (
          <li><Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>{p}</Typography></li>
        ))}
      </ul>
    </Box>
  )
}


function Post() {
  const points = [
    "Constructed a modular utility AI system by applying dynamic response curves to score and execute behavior tree nodes, building 9 opponent agents for challenge arenas",
    "Created aerial dodge, grab, and throw with improved AABB collision responses and a new combo system",
    "Built a tutorial NPC with integrated input capturer and sequencer tool to edit & replay 12 challenge solutions",
    "Profiled and optimized asset pipeline by abstracting resource loading and disposal into mandatory lifecycle methods for 45 game entity classes, resolving WebGL memory leaks of 4MB/match",
    "eveloped middleware plugins for hot module replacement by applying fallback behavior to active modules during code updates, caching 3D scenes and reducing reload times by 40-fold"
  ]
  return (
    <Box display={"flex"} width={"100%"} sx = {containerStyles}>
        <Box display={"flex"} flexDirection={"column"} sx = {textStyles}>
          <Typography color={"#704e8b"} fontFamily={"Poppins"} fontWeight={600} sx={titleStyles}>
            AI Arena:
          </Typography>
          <Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>
            A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking with over 40,000 players.
          </Typography>
          <Points points = {points}/>
        </Box>
    </Box>
  )
}

export default Post