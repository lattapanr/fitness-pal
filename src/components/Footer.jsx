// MUI components
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

const Footer = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair", "serif"].join(","),
    },
  });

  return (
    <Box mt="80px" borderTop="2px solid #2c2821">
      <ThemeProvider theme={theme}>
        <Typography
          variant="h5"
          sx={{ fontSize: { md: "20px", xs: "16px" } }}
          mt="20px"
          textAlign="center"
          pb="20px"
        >
          Designed and developed with passion by{" "}
          <span style={{ fontStyle: "italic" }}>
            <a href="https://github.com/lattapanr">Lattapan</a>
          </span>
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
