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
    xs: "16px",
    sm: "16px",
    md: "20px",
    lg: "20px",
    xl: "20px"
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
  transform: "translate(0%, -12%)"
}

function Points({points, flatten}) {
  return (
    <Box sx={{transform: "translate(-10px, -15px)"}}>
      <ul style={{marginBottom: "0px"}}>
        {points.map((p, idx) => (
          <li key={p}><Typography color="mytitle" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>{p}</Typography></li>
        ))}
      </ul>
    </Box>
  )
}

const iconStyles = {
  fontSize: {
    xs: 50,
    sm: 50,
    md: 60,
    lg: 65,
    xl: 65,
  },
  fontWeight: 600
}

const dotStyles = {
  fontSize: {
    xs: 15,
    sm: 15,
    md: 20,
    lg: 20,
    xl: 20
  },
  marginLeft: "1%"
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
                    <img src={process.env.PUBLIC_URL+s[0]} width={"100%"} style={{objectFit: "cover"}}/> :
                    (
                      s[1] == 1?
                      <video width={"100%"} controls="controls">
                         <source type="video/mp4" src={process.env.PUBLIC_URL+s[0]}></source>
                      </video>
                         :
                      <iframe src={s[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    )
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
        marginTop={"5px"}
        paddingBottom={"2%"}
      >
        {sources.map((s, idx) => { 
          return <CircleIcon key={`carousel-dot-${s[2]}`} sx={dotStyles} onClick={()=>setCurSlide(idx)} className={`icon ${curSlide == idx ? "selected" : ""}`} color="mytext"/>
        })}
      </Box>
    </Box>
  )
}

function Post({title, date, desc, points, sources}) {
  return (
    <Box display={"flex"} width={"100%"} flexDirection={"column"} sx = {textStyles}>
      <Box display={"flex"} alignItems={"flex-end"}>
        <Typography color={"mytitle"} fontFamily={"Poppins"} fontWeight={600} sx={titleStyles}>
          {title}
        </Typography>
        <Typography color={"mytext"} fontFamily={"Poppins"} marginLeft={"auto"} fontWeight={400} sx={captionStyles}>
          {date}
        </Typography>
      </Box>
      <Typography color="mytitle" variant="body1" fontFamily={"Poppins"} sx={bodyStyles}>
        {desc}
      </Typography>
      <Points points = {points} date = {date} flatten={sources.length == 0}/>
      {sources.length > 0 && <Carousel sources={sources}/>}
    </Box>
  )
}

export default Post