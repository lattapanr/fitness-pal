// packages
import { Stack, Typography } from "@mui/material";

// icons
import BodyPart from "../assets/icons/bodyPart.png";
import Back from "../assets/icons/back.png";
import Cardio from "../assets/icons/workout.png";
import Chest from "../assets/icons/chest.png";
import LowerArms from "../assets/icons/lowerArms.png";
import LowerLegs from "../assets/icons/lowerLegs.png";
import Neck from "../assets/icons/neck.png";
import Shoulders from "../assets/icons/shoulders.png";
import UpperArms from "../assets/icons/upperArms.png";
import UpperLegs from "../assets/icons/upperLegs.png";
import Waist from "../assets/icons/waist.png";

const BodyParts = ({ item, setBodyPart, bodyPart, icon, index }) => {
  const icons = [
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
        borderTop: bodyPart === item ? "4px solid #2c2821" : "",

        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: { md: "270px", xs: "200px" },
        height: { md: "280px", xs: "210px" },
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        key={item}
        src={icons[index % icons.length]}
        alt={bodyPart}
        style={{ width: "100px", height: "100px" }}
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
