import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

//utilities
import { exerciseOptions, fetchData } from "../utilities/fetchData";

//components
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // The number of exercises to be displayed per page
    const exercisesPerPage = 9;

    // Index of the last exercise to be displayed on the current page
    const indexOfLastExercise = currentPage * exercisesPerPage;
    // Index of the first exercise to be displayed on the current page
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    // Subset of exercises to be displayed on the current page
    const currentExercises = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    );

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: "smooth" });
    };

    useEffect(() => {
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

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    return (
        <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "107px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>

            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
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
