import Navbar from './components/Navbar'
import Bio from './components/Bio';
import { Box, Grid2, Divider, Typography } from '@mui/material';
import Post from './components/Post';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';

import './Portfolio.css';
import { Link } from 'react-router-dom';

const titleStyles = {
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "22px",
    lg: "22px",
    xl: "22px"
  }
}

const iconStyles = {
    fontSize: {
      xs: 50,
      sm: 50,
      md: 60,
      lg: 65,
      xl: 65,
    },
    fontWeight: 600,
    textDecorationLine: "mn"
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

function PCard({link, icon, title, desc, first}) {
    return (
        <Box marginLeft={first ? "0%" : "5%"} maxWidth={"250px"}>
            <Link to={link} style={{textDecoration: 'none'}}>
                <Box className={"card"} borderRadius={"10px"} bgcolor={"#f6c294"} outline={"5px solid #6c584c"} display={"flex"} flexDirection={"column"} padding={"10px 10px 10px 10px"}>
                    <Box>
                        {icon}
                    </Box>
                    <Typography color={"mytitle"} fontFamily={"Poppins"} fontWeight={600} sx={titleStyles}>
                        {title}
                    </Typography>
                    
                </Box>
            </Link>
        </Box>
    )
}

function Home() {
  return (
    <Box display={"flex"} width={"100%"} height={"100vh"} paddingTop={"20px"} justifyContent={"center"} bgcolor={"#FAE7C4"}>
      <Box display={"flex"} flexDirection={"column"} width={"90%"} maxWidth={950}>
        <Bio />
        <Section text={"Portfolios"} />
        <Box display={"flex"} marginTop={"2%"}>
            <PCard link={"/game"} title={"Game Programmer Portfolio"} icon={<SportsEsportsIcon className="icon" color="mytext" sx={iconStyles}/>} first={true}/>
            <PCard link={"/general"} title={"General Dev Portfolio"}  icon={<LanguageIcon className="icon" color="mytext" sx={iconStyles}/>} />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
