import {
    Box,
    Typography,
    Button,
    createTheme,
    ThemeProvider,
} from "@mui/material";

import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Gilda Display", "serif"].join(","),
        },
    });

    return (
        <Box display="flex" flexDirection="column" mt="90px" sx={{ width: 1 }}>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                    <ThemeProvider theme={theme}>
                        <Typography
                            color="#000000"
                            fontWeight="600"
                            fontSize="65px"
                        >
                            Fitness Pal
                        </Typography>
                    </ThemeProvider>

                    <Typography
                        fontWeight={700}
                        sx={{
                            fontSize: { lg: "24px", xs: "20px" },
                            fontStyle: "italic",
                        }}
                        mb="50px"
                        mt="50px"
                    >
                        Unleash Your Inner Strength, <br />
                        Explore the Exercise Spectrum! <br />
                        Discover a World of Moves for a Fitter You
                    </Typography>
                    <button className="explore-button" href="#exercises">
                        Explore Exercises
                    </button>
                </Box>
                <img
                    src={HeroBannerImg}
                    alt="banner"
                    className="hero-banner-img"
                />
            </Box>
            <Typography
                fontWeight={600}
                color="#937a59"
                sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
                fontSize="200px"
            >
                Exercise
            </Typography>
        </Box>
    );
};

export default HeroBanner;
