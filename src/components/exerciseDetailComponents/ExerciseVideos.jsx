// MUI components
import { Box, Typography, Tabs } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";

// hook
import { useState } from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  // State hook to manage the value of the active tab
  const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: { lg: "20px", xs: "0px" }, mb: "40px" }}>
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#937a59", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Box display="flex" gap="60px">
          {/* Map through the exerciseVideos array and render a video link for each item */}
          {exerciseVideos?.slice(0, 6).map((item, idx) => (
            <a
              key={idx}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                style={{ borderTopLeftRadius: "20px" }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: { md: "24px", xs: "20px" },
                  }}
                  fontWeight={600}
                  color="#000"
                  whiteSpace="normal"
                  lineHeight="20px"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Box>
      </Tabs>
    </Box>
  );
};

export default ExerciseVideos;
