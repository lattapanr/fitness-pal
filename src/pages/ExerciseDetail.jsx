// MUI components
import { Box, createTheme, ThemeProvider } from "@mui/material";

// hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// utilities
import {
  exerciseOptions,
  youtubeOptions,
  fetchData,
} from "../utilities/fetchData";

// local components
import Detail from "../components/exerciseDetailComponents/Detail";
import ExerciseVideos from "../components/exerciseDetailComponents/ExerciseVideos";
import SimilarExercises from "../components/exerciseDetailComponents/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl = "youtube-v2.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search/?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair", "serif"].join(","),
    },
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </ThemeProvider>
    </Box>
  );
};

export default ExerciseDetail;
