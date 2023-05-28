// MUI components
import { Stack, Typography } from "@mui/material";

// icons
import BodyPart from "../assets/images/bodyParts/all.jpg";
import Back from "../assets/images/bodyParts/back.jpg";
import Cardio from "../assets/images/bodyParts/cardio.jpg";
import Chest from "../assets/images/bodyParts/chest.jpg";
import LowerArms from "../assets/images/bodyParts/lowerArm.jpg";
import LowerLegs from "../assets/images/bodyParts/lowerLegs.jpg";
import Neck from "../assets/images/bodyParts/neck.jpeg";
import Shoulders from "../assets/images/bodyParts/shoulders.jpg";
import UpperArms from "../assets/images/bodyParts/upperArms.jpg";
import UpperLegs from "../assets/images/bodyParts/upperLegs.jpg";
import Waist from "../assets/images/bodyParts/waist.jpg";

const BodyParts = ({ item, setBodyPart, bodyPart, image, index }) => {
  const images = [
    BodyPart,
    Back,
    Cardio,
    Chest,
    LowerArms,
    LowerLegs,
    Neck,
    Shoulders,
    UpperArms,
    UpperLegs,
    Waist,
  ];

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderBottom: bodyPart === item ? "4px solid #2c2821" : "",

        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: { md: "270px", xs: "200px" },
        height: { md: "280px", xs: "210px" },
        cursor: "pointer",
      }}
      onClick={() => {
        // Call the setBodyPart function to update the selected body part
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        className="body-img"
        key={item}
        src={images[index % images.length]}
        alt={image}
      />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
