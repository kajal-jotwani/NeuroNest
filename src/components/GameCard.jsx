import "./GameCard.css";
import { Box, Typography, Button  } from "@mui/material";
import { styled } from "@mui/system";

const GameCard = ({ name, image, description, onStart }) => {
  const CardBox = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    margin: theme.spacing(2),
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }));

  const ContentBox = styled(Box)(() => ({
    padding: "1rem",
  }));

  return (
    <CardBox>
      <ImgContainer>
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImgContainer>

      <ContentBox>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onStart}
          sx={{ textTransform: "none" }}
        >
          Let's Start
        </Button>
      </ContentBox>
    </CardBox>
  );
};


export default GameCard;
