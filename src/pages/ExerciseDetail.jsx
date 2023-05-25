import { Box } from "@mui/material";

//hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//utility
import { exerciseOptions, fetchData } from "../utilities/fetchData";

//components
import Detail from "../components/exerciseDetailComponents/Detail";
import ExerciseVideos from "../components/exerciseDetailComponents/ExerciseVideos";
import SimilarExercises from "../components/exerciseDetailComponents/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseOptions
            );
            console.log({ exerciseDetailData });
            setExerciseDetail(exerciseDetailData);
        };

        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;
