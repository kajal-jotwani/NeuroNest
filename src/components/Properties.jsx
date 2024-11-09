// * Components
import properties from "../data/properties";
import House from "./House";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";
import { PiTargetBold } from "react-icons/pi";


// * Styled Components
const PropertiesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export default function Properties() {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Typography
            sx={{ color: "#000339", fontSize: "24px", fontWeight: "bold"}}
          >
              <PiTargetBold size={30} color="red"  style={
              {marginRight: "10px"}
            }/>
            Our Approach to Learning with NeuroNest is Game Based 
          
          
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "20px", my: 3 }}>
          Our app is thoughtfully crafted to support neurodivergent students by providing interactive games that target key cognitive skills such as memory, attention, and reaction time. These games are designed to be engaging and enjoyable, ensuring that learning feels less like a task and more like a fun challenge. Through real-time feedback and personalized progress tracking, students can see their improvements, boosting motivation and confidence along the way. The games focus on building focus, enhancing memory retention, and improving decision-making skills, all while keeping the experience interactive and stimulating. With a user-friendly interface and customizable options, our app allows neurodivergent students to play at their own pace, reducing frustration and increasing overall enjoyment. Whether it’s improving reflexes, strengthening problem-solving skills, or enhancing concentration, our app serves as an accessible tool that empowers students to reach their full potential. Additionally, the inclusion of visual cues, sound effects, and engaging challenges ensures a stimulating environment for students with ADHD, autism, or other cognitive conditions, helping them thrive in their learning journey.
          </Typography>
        </PropertiesTextBox>

        {/* <PropertiesBox>
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              space={property.space}
            />
          ))}
        </PropertiesBox> */}
      </Container>
    </Box>
  );
}
