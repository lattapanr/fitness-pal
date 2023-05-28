// MUI components
import { Box, Stack, Typography } from "@mui/material";

// local components
import HorizontalScrollbar from "../HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#937a59", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          // Render the HorizontalScrollbar component with the targetMuscleExercises data
          <HorizontalScrollbar
            data={targetMuscleExercises}
            sx={{
              fontSize: { lg: "28px", xs: "18px" },
            }}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#937a59", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "", whiteSpace: "normal" }}>
        {equipmentExercises.length !== 0 ? (
          // Render the HorizontalScrollbar component with the equipmentExercises data
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
