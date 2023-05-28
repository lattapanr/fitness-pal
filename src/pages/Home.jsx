// MUI components
import { Box, createTheme, ThemeProvider } from "@mui/material";

// hook
import { useState } from "react";

// local components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair", "serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
