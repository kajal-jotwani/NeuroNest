// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

// * Images
import HeroImg from "../media/hero_illustration.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Icons

// * Styled Components
const CustomHeroBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000336",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        paddingBottom: 2,
        marginBottom: 6,
      }}
    >
      <Container>
        <Navbar />

        <CustomHeroBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to NeuroSpace
            </Typography>
            <Title variant="h2">
              A Sanctuary for Neurodivergent Minds to Learn and Flourish
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
             NeuroSpace is an inclusive learning platform designed to create a safe, engaging, and accessible space for neurodivergent students. 
            </Typography>
          </Box>

          <Box sx={{ flex: 1.25 }}>
            <img
              src={HeroImg}
              alt="hero illustration"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </CustomHeroBox>
      </Container>
    </Box>
  );
}
