import { Typography, Stack, Button } from "@mui/material";

//images
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    console.log(gifUrl);
    console.log(name);
    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: { lg: "row" },
                p: "20px",
                alignItems: "center",
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
            />

            <Typography>{name}</Typography>
            <Stack></Stack>
        </Stack>
    );
};

export default Detail;
