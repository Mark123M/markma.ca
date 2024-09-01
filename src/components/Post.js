import { useState, useEffect } from "react";
import { animate } from "motion";
import { Box, Grid2, Typography, Divider } from "@mui/material";
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import './post.css'
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
const captionStyles = {
  fontSize: {
    xs: "12px",
    sm: "12px",
    md: "14px",
    lg: "14px",
    xl: "14px",
  },
}

function Points({points}) {
  return (
    <Box sx={{transform: "translate(-10px, -15px)"}}>
      <ul>
        {points.map((p, idx) => (
          <li key={p}><Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>{p}</Typography></li>
        ))}
      </ul>
    </Box>
  )
}

const iconStyles = {
  fontSize: {
    xs: 55,
    sm: 55,
    md: 60,
    lg: 65,
    xl: 65,
  },
  fontWeight: 600
}

function Carousel({sources}) {
  const [curSlide, setCurSlide] = useState(0);

  function setNextSlide() {
    if (curSlide >= sources.length - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
    console.log(curSlide)
  }

  function setPrevSlide() {
    if (curSlide <= 0) {
      setCurSlide(sources.length - 1);
    } else {
      setCurSlide(curSlide - 1);
    }
    console.log(curSlide)
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        position={"relative"}
        marginTop={"-25px"}
        alignItems={"center"}
      >
        <Box onClick={setPrevSlide}>
          <ArrowCircleLeftTwoToneIcon className="icon" color="mytext" sx={iconStyles} />
        </Box>
        {sources.map((s, idx) => { // s: [source, type, caption]
          return (
            <Box className={`carousel-slide ${curSlide == idx ? "shown" : "hidden"}`} width={"100%"} key={s[2]} position={"relative"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Typography color="mytext" variant="body1" fontFamily={"Poppins"} sx={captionStyles}>{s[2]}</Typography>
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box width={"100%"}>
                  {// image
                  s[1] == 0 ?
                    <img src={s[0]}/> :
                      (s[1] == 1 ? 
                        <video preload="auto"/> :
                        <iframe src={s[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
                  }
                </Box>
              </Box>
            </Box>
          )
        })}
        <Box onClick={setNextSlide}>
          <ArrowCircleRightTwoToneIcon className="icon" color="mytext" sx={iconStyles}/>
        </Box>
      </Box>
      <Box 
        display={"flex"}
        justifyContent={"center"}
        marginTop={"10px"}
      >
        {sources.map((s, idx) => { 
          return <CircleIcon key={`carousel-dot-${s[2]}`} sx={{marginLeft: "1%"}} onClick={()=>setCurSlide(idx)} className={`icon ${curSlide == idx ? "selected" : ""}`} color="mytext" fontSize="small"/>
        })}
      </Box>
    </Box>
  )
}

function Post() {
  const points = [
    "Constructed a modular utility AI system by applying dynamic response curves to score and execute behavior tree nodes, building 9 opponent agents for challenge arenas",
    "Created aerial dodge, grab, and throw with improved AABB collision responses and a new combo system",
    "Built a tutorial NPC with integrated input capturer and sequencer tool to edit & replay 12 challenge solutions",
    "Profiled and optimized asset pipeline by abstracting resource loading and disposal into mandatory lifecycle methods for 45 game entity classes, resolving WebGL memory leaks of 4MB/match",
    "Developed middleware plugins for hot module replacement by applying fallback behavior to active modules during code updates, caching 3D scenes and reducing reload times by 40-fold"
  ]
  const sources = [
    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "utility AI system"],
    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "aerial dodge, grab, and throw"],
    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "tutorial NPC"]
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
          <Carousel sources={sources}/>
        </Box>
    </Box>
  )
}

export default Post