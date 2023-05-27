//packages
import { Box } from "@mui/material";

//components
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

//tab component
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { useState } from "react";

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
  bodyParts,
  icon,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
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
      {data.map((item, index) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
              icon={icon}
              index={index}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Tabs>
  );
};

export default HorizontalScrollbar;
