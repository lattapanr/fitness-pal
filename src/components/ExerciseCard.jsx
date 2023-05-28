// MUI components
import { Button, Stack, Typography } from "@mui/material";

// router
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            mt: "10px",
            ml: "21px",
            color: "#000",
            background: "#f4ebd9",
            fontSize: "14px",
            border: "1px solid #2c2821",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            mt: "10px",
            ml: "21px",
            color: "#000",
            background: "#f4ebd9",
            fontSize: "14px",
            border: "1px solid #2c2821",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
