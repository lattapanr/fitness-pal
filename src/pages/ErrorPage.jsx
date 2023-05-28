import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#bfd5d9",
      }}
    >
      <Typography variant="h1" style={{ color: "#000" }}>
        404 Not Found
      </Typography>
      <Typography variant="h5" style={{ color: "#000" }}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="h6">
        Go to the <Link to="/">Homepage</Link>.
      </Typography>
    </Box>
  );
}
