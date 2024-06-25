// MUI components
import { Button, Stack, Typography } from "@mui/material";

// router
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" gap="10px" ml="10px">
        <Typography className="exercise-card-desc">
          {exercise.bodyPart}
        </Typography>

        <Typography className="exercise-card-desc">
          {exercise.target}
        </Typography>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
