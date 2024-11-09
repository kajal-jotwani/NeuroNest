// * Components
// import CustomButton from "./CustomButton";

// * Images
import homeIllustration from "../media/illustration.png";

// * MUI Components
import { Box, Button, Container, Typography, styled } from "@mui/material";

// * MUI Icons

// * Custom Styled Components
const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#c6eee8",
  height: "416px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 3, 0, 3),
    width: "90%",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export default function Featured() {
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
            All you need to know
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#gray", fontWeight: "500", my: 3 }}
          >
            Neurodivergent is a term used to describe individuals whose brain processes, learns, or behaves differently from what is typically expected. It recognizes that there is no one "normal" way for a brain to function, and that variations in thinking, learning, and behavior should be accepted and valued rather than pathologized.
          </Typography>
         <a href="https://my.clevelandclinic.org/health/symptoms/23154-neurodivergent"> <Button variant="contained" color="primary" sx={{ 
          padding: "10px 30px", 
          fontSize: "16px", 
          fontWeight: "700", 
          textTransform: "capitalize",
          borderRadius: "15px",
          backgroundColor: "gray",
          "&:hover": {
            backgroundColor: "black",
          },
         }}> Learn More </Button> </a>
        </Box>
        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "50%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
}
