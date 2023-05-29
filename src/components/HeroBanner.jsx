// MUI components
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

// image
import HeroBannerImg from "../assets/images/banner.jpg";

const HeroBanner = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Gilda Display", "serif"].join(","),
        },
    });

    return (
        <Box
            display="flex"
            flexDirection="column"
            mt="50px"
            sx={{
                width: 1,
                alignItems: {
                    xs: "center",
                    md: "flex-start",
                },
            }}
        >
            <Box
                display="flex"
                sx={{
                    width: 1,
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    justifyContent: { xs: "center", md: "space-between" },
                }}
            >
                <Box display="flex" flexDirection="column">
                    <ThemeProvider theme={theme}>
                        <Typography
                            color="#000000"
                            fontWeight="600"
                            sx={{
                                fontSize: {
                                    md: "75px",
                                    sm: "70px",
                                    xs: "50px",
                                },
                            }}
                        >
                            Fitness Pal
                        </Typography>
                    </ThemeProvider>

                    <Typography
                        fontWeight={700}
                        fontStyle="italic"
                        sx={{
                            fontSize: { lg: "24px", sm: "20px", xs: "16px" },
                        }}
                        mb="50px"
                        mt="50px"
                    >
                        Unleash Your Inner Strength, <br />
                        Explore the Exercise Spectrum! <br />
                        Discover a World of Moves for a Fitter You
                    </Typography>

                    <a href="#exercises">
                        <button className="explore-button">
                            Explore Exercises
                        </button>
                    </a>
                </Box>
                <img
                    src={HeroBannerImg}
                    alt="banner"
                    className="hero-banner-img"
                />
            </Box>
            <Typography
                fontWeight={600}
                color="#2c2821"
                sx={{
                    opacity: "0.1",
                    lineHeight: "250px",
                    fontSize: { sm: "200px", xs: "105px" },
                }}
            >
                Exercise
            </Typography>
        </Box>
    );
};

export default HeroBanner;
