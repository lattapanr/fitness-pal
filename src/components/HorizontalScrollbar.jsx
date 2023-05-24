//packages
import { Box } from "@mui/material";

//components
import BodyPart from "./BodyPart";

//tab component
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { useState } from "react";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
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
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart
                        item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            ))}
        </Tabs>
    );
};

export default HorizontalScrollbar;
