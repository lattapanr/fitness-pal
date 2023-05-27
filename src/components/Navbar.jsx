import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <header>
      <Stack
        sx={{
          display: "flex",
          alignItems: { sm: "flex-start", xs: "center" },
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "100px", xs: "30px" },
          justifyContent: "none",
        }}
      >
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#000000",
              borderBottom: "3px solid #2c2821",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </header>
  );
};

export default Navbar;
