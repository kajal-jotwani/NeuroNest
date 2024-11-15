// * Components
// import CustomButton from "./CustomButton";

// * Images
// import buyIcon from "../media/buy_icon.png";
// import sellIcon from "../media/sell_icon.png";
// import rentIcon from "../media/rent_icon.png";
import { FaGamepad } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";

// * MUI Components
// import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

// * MUI Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export default function Guide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          This is the place where we support learners with ADHD, dyslexia, and other neurological differences by providing personalized educational tools and fun, interactive games. 
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          {/* <img src={buyIcon} alt="buyIcon" /> */}
          <FaGamepad size={30} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Play Games
            
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
             Lets Play Here
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} /> */}
          </Box>
        </GuideBox>

        <GuideBox>
          {/* <img src={rentIcon} alt="buyIcon" /> */}
          <FaBlogger size={30} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
             Write Blogs
            
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Help by sharing
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} /> */}
          </Box>
        </GuideBox>

        <GuideBox>
          {/* <img src={sellIcon} alt="buyIcon" /> */}
          <FaPeopleLine size={30} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Support Community
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Every Support Matters
            </Typography> */}
            {/* <ArrowRightAlt style={{ color: "#0689FF" }} /> */}
          </Box>
        </GuideBox>
      </GuidesBox>

      {/* <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      /> */}
    </Box>
  );
}
