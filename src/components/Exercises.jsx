// MUI components
import { Box, Pagination, Stack, Typography } from "@mui/material";

// hooks
import { useEffect, useState } from "react";

// utilities
import { exerciseOptions, fetchData } from "../utilities/fetchData";

// local components
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  // Get the exercises to be displayed on the current page
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    t;
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    // Fetch exercises data based on the selected body part
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      // Set the fetched exercises data
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography
        variant="h3"
        mb="46px"
        sx={{ fontSize: { md: "48px", xs: "34px" } }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* Render ExerciseCard component for each exercise */}
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {/* Render pagination component if there are more than 9 exercises */}
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
